import { WeatherData } from "../types";

const BASE = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const API_KEY = (((typeof process !== "undefined" && (process.env as any)?.VITE_OPENWEATHER_API_KEY) || (globalThis as any)?.VITE_OPENWEATHER_API_KEY) as string);

  if (!API_KEY)
    throw new Error("Missing OpenWeather API key (VITE_OPENWEATHER_API_KEY)");

  const url = `${BASE}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`OpenWeather error: ${res.status} ${text}`);
  }
  const d = await res.json();

  return {
    cityName: d.name,
    country: d.sys?.country,
    temperature: d.main?.temp,
    feelsLike: d.main?.feels_like,
    humidity: d.main?.humidity,
    windSpeed: d.wind?.speed,
    description: d.weather?.[0]?.description,
    icon: d.weather?.[0]?.icon,
  } as WeatherData;
}
