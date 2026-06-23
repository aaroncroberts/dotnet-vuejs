import { api } from './api'

export interface WeatherForecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

export const weatherService = {
  getForecasts: () => api.get<WeatherForecast[]>('/weatherforecast'),
}
