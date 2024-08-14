import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { getRandomIcon } from './symbolConfig';

export interface ClusterConfig {
  readonly numClusters: number;
  readonly clusterRadius: number;
  readonly clusterDensity: number;
  readonly canvasWidth: number;
  readonly canvasHeight: number;
}

export interface Cluster {
  readonly x: number;
  readonly y: number;
  readonly intensity: number;
}

export interface IconPosition {
  readonly icon: IconDefinition;
  readonly x: number;
  readonly y: number;
}

export function createClusters(config: ClusterConfig): ReadonlyArray<Cluster> {
  const { numClusters, canvasWidth, canvasHeight } = config;
  return Array.from({ length: numClusters }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    intensity: Math.random() * 0.5 + 0.5 // Random intensity between 0.5 and 1
  }));
}

export function createIconArray(clusters: ReadonlyArray<Cluster>, config: ClusterConfig): ReadonlyArray<IconPosition> {
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