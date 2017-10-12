import Vuex from 'vuex'
import Vue from 'vue';
import api from '../../data/APIManager';
import fetch from '../../lib/fetch';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        appName: 'Get started with vue',
        mensOuterWear: ""
    },
    mutations: {
        addMensOuterWear: (context, value) => {
            context.mensOuterWear = value;
        }
    },
    actions: {
        fetchMensOuterWear: function (context) {
            fetch(api.MENS_OUTERWEAR)
                .then(x => {
                    context.commit("addMensOuterWear", x)
                });
        }
    }
})
