/**
 * Interface for a Cluster
 */
export interface Cluster {
  x: number;
  y: number;
  intensity: number; // Intensity of the cluster (decreasing outward)
}

/**
 * Function to create clusters
 * @param numClusters - Number of clusters to create
 * @param maxX - Maximum width of the wallpaper
 * @param maxY - Maximum height of the wallpaper
 * @param maxIntensity - Maximum intensity of the clusters
 * @returns Array of clusters
 */
export function createClusters(numClusters: number, maxX: number, maxY: number, maxIntensity: number): Cluster[] {
  return Array.from({length: numClusters}, (_, i) => {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const intensity = maxIntensity - (i / numClusters) * maxIntensity; // Decreasing intensity
    return { x, y, intensity };
  });
}

// Usage
const numClusters = 5; // Number of clusters
const maxX = 1000; // Maximum width of the wallpaper
const maxY = 1000; // Maximum height of the wallpaper
const maxIntensity = 10; // Maximum intensity of the clusters

const clusters = createClusters(numClusters, maxX, maxY, maxIntensity);

// Use the generated clusters in the wallpaper

