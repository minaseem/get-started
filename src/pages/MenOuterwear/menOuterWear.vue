<template>
    <default-layout>

        <router-link
                class="navbar-brand"
                :to="{ name: 'men_s_outerwear.index' }"
        >
            <img src="data/polymer/es6-unbundled/images/mens_outerwear.jpg" alt="" class="img-header">
        </router-link>
        Men's outerwear page
    </default-layout>
</template>
<style>
    .img-header {
        max-width: 100%;
    }
</style>
<script>
    import DefaultLayout from '../../layout/default.vue';
    import fetch from '../../../lib/fetch';
    import api from '../../../data/APIManager';

    export default {
        name: 'men_s_outerwear',
        components: {
            DefaultLayout
        },
        beforeMount: () => {
            fetch(api.MENS_OUTERWEAR)
                .then(x => {
                    console.log(x)
                });
        }
    }
</script>