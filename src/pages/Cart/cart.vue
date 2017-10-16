<template>
    <no-header-layout>
        <cart-item v-for="item in items" :meta="item"></cart-item>
        <div v-if="items.length ===0">You don't have any item in cart</div>
    </no-header-layout>
</template>

<script>
    import NoHeaderLayout from '../../layout/noHeader.vue';
    import CartItem from '../../components/cartItem/cartItem.vue';

    export default {
        name: "cart",
        computed: {
            items() {
                return this.$store.state.cart;
            }
        },
        components: {
            NoHeaderLayout,
            CartItem
        }
    }
</script>