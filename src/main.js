import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";

// TODO: Provide your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBv7DZXblFNT1LWF5ukKQ-AvdVH1__wgUw",
  authDomain: "vue-chat-c04db.firebaseapp.com",
  databaseURL: "https://vue-chat-c04db-default-rtdb.firebaseio.com",
  projectId: "vue-chat-c04db",
  storageBucket: "vue-chat-c04db.appspot.com",
  messagingSenderId: "197907026099",
  appId: "1:197907026099:web:9494e94de90794e02a60c6"
};

const app = initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
