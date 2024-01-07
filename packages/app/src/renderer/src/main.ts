import 'virtual:uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import { pinia } from './store';

const app = createApp(App);

app
  .use(pinia)
  .use(router)
  .mount('#app');
