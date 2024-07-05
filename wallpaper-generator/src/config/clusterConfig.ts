import icons from './symbolConfig';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const icon: IconDefinition = faHeart;

const width = 100;
const height = 100;
const distance = 100;


const iconArray = [];

for (let i = 0; i < width; i += distance) {
    for (let j = 0; j < height; j += distance) {
      const icon = icons[Math.floor(Math.random() * icons.length)];
      iconArray.push({
        icon,
        x: i,
        y: j,
      });
    }
  }
  
  // Shuffle the array to randomize the placement of symbols
  iconArray.sort(() => Math.random() - 0.5);



  const numClusters = 5; // Anzahl der Cluster
  const clusterConfig = {
    // Konfiguration für Cluster
  };
  
  function createClusters() {
    // Logik zur Erstellung der Cluster basierend auf den Konfigurationen
  }
  
  interface Cluster {
    x: number;
    y: number;
    intensity: number; // Intensität des Clusters (abnehmend nach außen)
  }
  
  const clusterConfig = {};

  export { clusterConfig };