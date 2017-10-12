<style>
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
        <slot></slot>
    </div>
</template>

<script>
    import CartBadge from '../components/cartCountBadge/cartCoundBadge.vue';

    export default {
        name: 'no-header-layout',
        components: {
            CartBadge
        }
    }
</script>