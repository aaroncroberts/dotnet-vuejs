<script setup lang="ts">
import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'

const crumbs = [
  { label: 'Home', to: '/' },
];

</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-8">
          <span class="text-xl font-bold text-gray-900">Dotnet Vue.js</span>
          <nav class="flex items-center gap-6">
          </nav>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
      <AppBreadcrumb :crumbs="crumbs" />                  
    </div>

    <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 flex-1">
      <RouterView />
    </main>
  </div>
</template>