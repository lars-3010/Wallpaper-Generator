<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import WallpaperGenerator from './components/WallpaperGenerator.vue';

const clusterStrength = ref(0.5);
const numClusters = ref(5);
const wallpaperGenerator = ref(null);

const rotateWallpaper = () => {
  if (wallpaperGenerator.value) {
    wallpaperGenerator.value.circles = rotateWallpaper(wallpaperGenerator.value.circles);
  }
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <div class="wallpaper-controls">
    <h2>Wallpaper Generator</h2>
    <div class="control">
      <label for="cluster-strength">Cluster Strength:</label>
      <input
        id="cluster-strength"
        type="range"
        v-model="clusterStrength"
        min="0"
        max="1"
        step="0.1"
      />
      <span>{{ clusterStrength }}</span>
    </div>
    <div class="control">
      <label for="num-clusters">Number of Clusters:</label>
      <input
        id="num-clusters"
        type="range"
        v-model="numClusters"
        min="1"
        max="10"
        step="1"
      />
      <span>{{ numClusters }}</span>
    </div>
    <button @click="rotateWallpaper">Rotate Wallpaper</button>
  </div>

  <WallpaperGenerator
    ref="wallpaperGenerator"
    :width="1920"
    :height="1080"
    :numClusters="Number(numClusters)"
    :clusterStrength="Number(clusterStrength)"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.wallpaper-controls {
  margin-top: 2em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.control {
  margin-bottom: 1em;
}

label {
  display: inline-block;
  width: 150px;
}

input[type="range"] {
  width: 200px;
  vertical-align: middle;
}

span {
  display: inline-block;
  width: 30px;
  text-align: right;
}

button {
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>