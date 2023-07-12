import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import '@fontsource-variable/oswald';

// FontAwsome

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// solid icons
import {
  faQuoteLeft,
  faLocationDot,
  faUserGroup,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

// brand icons
import {
  faSquareInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faQuoteLeft,
  faSquareInstagram,
  faTwitter,
  faFacebookF,
  faLocationDot,
  faUserGroup,
  faStopwatch
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
