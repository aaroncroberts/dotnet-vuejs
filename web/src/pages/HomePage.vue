<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { weatherService, type WeatherForecast } from '@/services/weatherService'
import WeatherForecastList from '@/components/shared/WeatherForecastList.vue'

const forecasts = ref<WeatherForecast[]>([])
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    forecasts.value = await weatherService.getForecasts()
  } catch (e) {
    error.value = (e as Error).message
  }
})
</script>

<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">Home</h1>
    <WeatherForecastList :forecasts="forecasts" :error="error" />
  </div>
</template>

<style scoped></style>
