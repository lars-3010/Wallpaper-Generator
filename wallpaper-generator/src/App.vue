<script setup lang="ts">
import { ref, computed } from 'vue';
import WallpaperGenerator from './components/WallpaperGenerator.vue';

const clusterStrength = computed({
  get: () => Number(clusterStrengthRef.value),
  set: (val: number) => { clusterStrengthRef.value = val.toString(); }
});
const numClusters = computed({
  get: () => Number(numClustersRef.value),
  set: (val: number) => { numClustersRef.value = val.toString(); }
});

const clusterStrengthRef = ref('0.5');
const numClustersRef = ref('5');
const wallpaperGenerator = ref<InstanceType<typeof WallpaperGenerator> | null>(null);

const rotateWallpaper = () => {
  wallpaperGenerator.value?.rotateWallpaper();
};
</script>

<template>
  <!-- Rest of the template remains the same -->
</template>

<style scoped>
/* Styles remain the same */
</style>