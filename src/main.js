import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import '@fontsource-variable/oswald';

// FontAwsome

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faQuoteLeft);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
