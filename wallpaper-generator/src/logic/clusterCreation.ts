import { Cluster, ClusterConfig } from '../config/clusterConfig';

export function createClusters(config: ClusterConfig): Cluster[] {
  const { numClusters, canvasWidth, canvasHeight, clusterDensity } = config;
  
  return Array.from({ length: numClusters }, (_, i) => {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    const intensity = clusterDensity * (1 - i / numClusters); // Decreasing intensity
    return { x, y, intensity };
  });
}

export function adjustClusterIntensity(clusters: Cluster[], strength: number): Cluster[] {
  return clusters.map(cluster => ({
    ...cluster,
    intensity: cluster.intensity * strength
  }));
}