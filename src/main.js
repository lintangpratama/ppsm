import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import firebaseConfig from "../firebaseConfig";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

initializeApp(firebaseConfig);

createApp(App).use(router).use(VueSweetalert2).mount("#app");
