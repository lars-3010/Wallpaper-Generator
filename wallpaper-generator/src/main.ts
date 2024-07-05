import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { icons } from './config/symbolConfig';
import { clusterConfig } from './config/clusterConfig';
import { createClusters } from './logic/clusterCreation';
import { rotateWallpaper } from './logic/wallpaperRotation';

// Hinzufügen von Symbolen zur Bibliothek
library.add(faUserSecret)
icons.forEach(icon => library.add(icon));

config.styleDefault = "duotone";

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layer-text', FontAwesomeLayersText)
    .mount('#app')