import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Skill from "./components/Skills";
import PageNotFound from "./components/PageNotFound"
import VueRouter from 'vue-router';
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "*", component: PageNotFound },
  { path: '/:lang', component: AboutMe },
  { path: '/:lang/career', component: Career },
  { path: '/:lang/skill', component: Skill },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app');
