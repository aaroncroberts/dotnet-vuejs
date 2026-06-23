<script setup lang="ts">
import { type WeatherForecast } from '@/services/weatherService'

defineProps<{
  forecasts: WeatherForecast[]
  error: string | null
}>()
</script>
<template>
  <h2>Weather Forecast List</h2>
  <p v-if="error">{{ error }}</p>
  <ul v-else>
    <li v-for="forecast in forecasts" :key="forecast.date">
      {{ forecast.date }} — {{ forecast.temperatureC }}°C — {{ forecast.summary }}
    </li>
  </ul>
</template>
