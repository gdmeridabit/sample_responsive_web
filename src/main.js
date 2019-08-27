import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Skill from "./components/Skills";
import PageNotFound from "./components/PageNotFound"
import VueRouter from 'vue-router';
import i18n from './i18n'
import '../stylus/main.styl'
import Others from "./components/Others";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "*", name: 'error', component: PageNotFound },
  { path: '/:lang', name: 'about', component: AboutMe },
  { path: '/:lang/career', name: 'career', component: Career },
  { path: '/:lang/skill', name: 'skill', component: Skill },
  { path: '/:lang/others', name: 'others', component: Others },
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
