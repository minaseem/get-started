/**
 * Created by imamudinnaseem on 5/17/17.
 */
'use strict'
import "./css/app.css";
import Vue from 'vue';
import App from './app.vue';
import routes from '@/route/route';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import {store} from './store/store';

Vue.use(VueRouter);
export const router = new VueRouter({
    routes,
});

new Vue({
    /**
     * Bind the Vue instance to the HTML.
     */
    el: '#root',
    router,
    render: h => h(App),
    store
});
