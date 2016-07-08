import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import configRouter from 'router';
import VApp from 'components/commons/app.vue';
import 'assets/css/main.css';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({ hashbang: false, linkActiveClass: 'active', supressTransitionError: true });

configRouter(router);

router.start(VApp, 'v-app');