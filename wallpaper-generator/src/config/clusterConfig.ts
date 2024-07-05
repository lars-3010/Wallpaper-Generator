import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { getRandomIcon } from './symbolConfig';

export interface ClusterConfig {
  numClusters: number;
  clusterRadius: number;
  clusterDensity: number;
  canvasWidth: number;
  canvasHeight: number;
}

export interface Cluster {
  x: number;
  y: number;
  intensity: number;
}

export interface IconPosition {
  icon: IconDefinition;
  x: number;
  y: number;
}

export function createClusters(config: ClusterConfig): Cluster[] {
  const { numClusters, canvasWidth, canvasHeight } = config;
  return Array.from({ length: numClusters }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    intensity: Math.random() * 0.5 + 0.5 // Random intensity between 0.5 and 1
  }));
}

export function createIconArray(clusters: Cluster[], config: ClusterConfig): IconPosition[] {
  const { clusterRadius, clusterDensity, canvasWidth, canvasHeight } = config;
  const iconArray: IconPosition[] = [];

  clusters.forEach(cluster => {
    const numIcons = Math.floor(clusterDensity * cluster.intensity);
    for (let i = 0; i < numIcons; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * clusterRadius;
      const x = cluster.x + distance * Math.cos(angle);
      const y = cluster.y + distance * Math.sin(angle);

      if (x >= 0 && x < canvasWidth && y >= 0 && y < canvasHeight) {
        iconArray.push({
          icon: getRandomIcon(),
          x,
          y
        });
      }
    }
  });

  return iconArray;
}