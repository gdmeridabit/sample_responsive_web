import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Skill from "./components/Skills";
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: AboutMe },
  { path: '/career', component: Career },
  { path: '/skill', component: Skill },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
