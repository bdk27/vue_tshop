import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'

const bus = mitt();
const app = createApp(App);

app.config.globalProperties.bus = bus;
app.use(router);
app.mount('#app');

