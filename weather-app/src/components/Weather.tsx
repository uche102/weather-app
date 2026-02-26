import React from "react";
import { WeatherData } from "../types";

interface WeatherProps {
  data: WeatherData | null;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  if (!data) return <div>No weather data available.</div>;

  return (
    <div>
      <h2>
        {data.cityName}
        {data.country ? `, ${data.country}` : ""}
      </h2>
      <p>
        {Math.round(data.temperature)} °C
        {data.feelsLike !== undefined &&
          ` · Feels like ${Math.round(data.feelsLike)} °C`}
      </p>
      {data.description && (
        <p style={{ textTransform: "capitalize" }}>{data.description}</p>
      )}
      <p>
        Humidity: {data.humidity ?? "—"}% · Wind: {data.windSpeed ?? "—"} m/s
      </p>
      {data.icon && (
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description ?? "weather icon"}
        />
      )}
    </div>
  );
};

export default Weather;
