export interface WeatherData {
  cityName: string;
  country?: string;
  temperature: number;
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
  description?: string;
  icon?: string;
}

export interface SearchProps {
  onSearch: (city: string) => void;
}
