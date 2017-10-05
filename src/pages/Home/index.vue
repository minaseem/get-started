<template>
    <default-layout>
        <shop-now title="Men's OuterWear" src="data/polymer/es6-unbundled/images/mens_outerwear.jpg" routeTo="men_s_outerwear.index"></shop-now>
        <shop-now title="Ladies OuterWear" src="data/polymer/es6-unbundled/images/ladies_outerwear.jpg"></shop-now>
        <div class="flex">
            <shop-now title="Men's T-shirt"src="data/polymer/es6-unbundled/images/mens_tshirts.jpg"></shop-now>
            <shop-now title="Ladies T-shirt" src="data/polymer/es6-unbundled/images/ladies_tshirts.jpg"></shop-now>
        </div>
    </default-layout>
</template>

<script>
    import NavHeader from '@/components/header/header';
    import DefaultLayout from '../../layout/default.vue';
    import ShopNow from '../../components/shopNow/shopNow.vue';

    export default {
        /**
         * The name of the page.
         */
        name: 'home',

        /**
         * The components that the page can use.
         */
        components: {
            DefaultLayout,
            ShopNow
        },
    }
</script>