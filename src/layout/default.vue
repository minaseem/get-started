<style>
    .nav {
        display: flex;
        justify-content: space-around;
        padding: 15px 50px;
        position: relative;
    }

    .app-header {
        text-align: center;
        margin: 5px 0;
        font-size: 1.2em;
    }
</style>
<template>
    <div>
        <router-link
                :to="{ name: 'home.index' }"
        >
            <div class="app-header">
                SHOP
                <router-link :to="{ name: 'cart' }">
                    <cart-badge></cart-badge>
                </router-link>
            </div>
        </router-link>
        <nav-header></nav-header>
        <router-view></router-view>
        <slot></slot>
    </div>
</template>

<script>
    import CartBadge from '../components/cartCountBadge/cartCoundBadge.vue';
    import NavHeader from '../components/header/header.vue';

    export default {
        name: 'default-layout',
        components: {
            CartBadge,
            NavHeader
        }
    }
</script>