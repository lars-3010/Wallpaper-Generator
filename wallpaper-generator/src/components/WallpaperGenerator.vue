<template>
    <div class="wallpaper-container" :style="containerStyle">
      <div v-for="(circle, index) in circles" :key="index" class="circle" :style="getCircleStyle(circle)">
        <font-awesome-icon :icon="circle.icon" :style="getIconStyle(circle)" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { icons } from '../config/symbolConfig';
  import { createClusters, Cluster } from '../logic/clusterCreation';
  import { SymbolPlacement } from '../logic/symbolPlacement';
  
  export default defineComponent({
    name: 'WallpaperGenerator',
    components: {
      FontAwesomeIcon,
    },
    props: {
      width: {
        type: Number,
        default: 1920,
      },
      height: {
        type: Number,
        default: 1080,
      },
      numClusters: {
        type: Number,
        default: 5,
      },
      clusterStrength: {
        type: Number,
        default: 0.5,
      },
      backgroundColor: {
        type: String,
        default: '#272822', // Monokai background color
      },
    },
    setup(props) {
      const circles = ref<Array<{ x: number; y: number; color: string; icon: any; size: number }>>([]);
  
      const containerStyle = computed(() => ({
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundColor: props.backgroundColor,
      }));
  
      const monokaiColors = ['#F92672', '#A6E22E', '#FD971F', '#66D9EF', '#AE81FF'];
  
      const generateWallpaper = () => {
        const clusters = createClusters(props.numClusters, props.width, props.height, 10 * props.clusterStrength);
        const symbolPlacement = new SymbolPlacement(icons, props.width, props.height);
  
        circles.value = [];
  
        clusters.forEach((cluster: Cluster) => {
          const numCircles = Math.floor(Math.random() * 20) + 10;
          for (let i = 0; i < numCircles; i++) {
            const x = symbolPlacement.gaussianRandom(cluster.x, props.width / 10);
            const y = symbolPlacement.gaussianRandom(cluster.y, props.height / 10);
            const color = monokaiColors[Math.floor(Math.random() * monokaiColors.length)];
            const icon = icons[Math.floor(Math.random() * icons.length)];
            const size = Math.random() * 30 + 20;
  
            circles.value.push({ x, y, color, icon, size });
          }
        });
  
        // Add some sparse circles
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * props.width;
          const y = Math.random() * props.height;
          const color = monokaiColors[Math.floor(Math.random() * monokaiColors.length)];
          const icon = icons[Math.floor(Math.random() * icons.length)];
          const size = Math.random() * 20 + 10;
  
          circles.value.push({ x, y, color, icon, size });
        }
      };
  
      const getCircleStyle = (circle: { x: number; y: number; color: string; size: number }) => ({
        left: `${circle.x}px`,
        top: `${circle.y}px`,
        backgroundColor: circle.color,
        width: `${circle.size}px`,
        height: `${circle.size}px`,
      });
  
      const getIconStyle = (circle: { size: number }) => ({
        fontSize: `${circle.size * 0.6}px`,
        color: props.backgroundColor,
      });
  
      onMounted(() => {
        generateWallpaper();
      });
  
      return {
        circles,
        containerStyle,
        getCircleStyle,
        getIconStyle,
      };
    },
  });
  </script>
  
  <style scoped>
  .wallpaper-container {
    position: relative;
    overflow: hidden;
  }
  
  .circle {
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>