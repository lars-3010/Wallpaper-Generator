import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { setupIcons } from './config/iconSetup.ts';

// Set up icons
setupIcons();

config.styleDefault = "duotone";

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layer-text', FontAwesomeLayersText)
    .mount('#app')