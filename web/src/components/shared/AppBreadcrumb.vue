<script setup lang="ts">
interface Crumb {
  label: string
  to?: string
}

defineProps<{
  crumbs: Crumb[]
}>()
</script>

<template>
  <nav class="flex items-center gap-2 text-sm text-gray-500">
    <template v-for="(crumb, index) in crumbs" :key="crumb.label">
      <span v-if="index > 0" class="text-gray-300">/</span>
      <RouterLink
        v-if="crumb.to"
        :to="crumb.to"
        class="hover:text-gray-700 transition-colors"
      >
        {{ crumb.label }}
      </RouterLink>
      <span v-else class="text-gray-900 font-medium">{{ crumb.label }}</span>
    </template>
  </nav>
</template>