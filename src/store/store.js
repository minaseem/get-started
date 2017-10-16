import Vuex from 'vuex'
import Vue from 'vue';
import api from '../../data/APIManager';
import fetch from '../../lib/fetch';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        appName: 'Get started with vue',
        mensOuterWear: "",
        ladiesOuterWear: "",
        cart: []
    },
    mutations: {
        addMensOuterWear: (context, value) => {
            context.mensOuterWear = value;
        },
        addLadiesOuterWear: (context, value) => {
            context.ladiesOuterWear = value;
        },
        removeItem(context, value) {
            context.cart = context.cart.filter(x => x.name !== value);
        }
    },
    actions: {
        fetchMensOuterWear: function (context) {
            context.state.mensOuterWear === "" && fetch(api.MENS_OUTERWEAR)
                .then(x => {
                    context.commit("addMensOuterWear", x)
                });
        },
        fetchLadiesOuterWear: function (context) {
            context.state.ladiesOuterWear === "" && fetch(api.LADIES_OUTERWEAR)
                .then(x => {
                    context.commit("addLadiesOuterWear", x)
                });
        },
        addToCart(context, value) {
            var cart = context.state.cart.slice(0);
            var currentIndex = cart.findIndex(x => x.name === value.name);
            if (currentIndex > -1) {
                cart[currentIndex].count++;
            } else {
                var currentItem = Object.assign({}, value);
                currentItem.count = 1;
                cart.push(currentItem);
            }
            context.state.cart = cart;
        },
        checkout(context) {
            var cartItems = context.cart;
            fetch("/data/checkout", {
                method: "POST",
                body: JSON.stringify(cartItems)
            })
                .then(x => x.json())
                .then(x => {
                    // x {
                    // }

                })
        }
    }
})
