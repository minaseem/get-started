<template>
    <div>
        <router-link
                class="navbar-brand"
                :to="{ name: 'ladiesOuterWear' }"
        >
            <img src="data/polymer/es6-unbundled/images/ladies_outerwear.jpg" alt="" class="img-header fade-in">
        </router-link>
        <div class="shop-items">
            <shop-item v-for="(meta, key, index) in shopItems" v-bind:meta="meta" v-bind:key="key">

            </shop-item>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
    .img-header {
        max-width: 100%;
    }

    .shop-items {
        display: flex;
        flex-wrap: wrap;
    }
</style>
<script>
    import DefaultLayout from '../../layout/default.vue';
    import fetch from '../../../lib/fetch';
    import api from '../../../data/APIManager';
    import ShopItem from '../../components/shopItem/shopItem.vue';

    var identityF = r => () => r;
    export default {
        name: 'ladies-outerwear',
        computed: {
            shopItems: function () {
                return this.$store.state.ladiesOuterWear;
            }
        },
        components: {
            DefaultLayout,
            ShopItem
        },
        beforeMount: function () {
            this.$store.dispatch("fetchLadiesOuterWear");
        }
    }
</script>