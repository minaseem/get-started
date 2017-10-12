<template>
    <div class="cart-icon">
        <div v-if="count > 0" class="count-badge">{{count}}</div>
    </div>
</template>
<style>
    .cart-icon {
        background: url(../../images/cart.svg) no-repeat 97% 0;
        position: absolute;
        top: 6px;
        right: 6px;
        height: 22px;
        width: 22px;
    }

    .count-badge {
        position: absolute;
        height: 15px;
        width: 15px;
        font-size: 10px;
        right: -5px;
        top: -5px;
        background: #191637;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }
</style>
<script>
    export default {
        name: 'cart-badge',
        computed: {
            count() {
                return this.$store.state.cart.reduce((result, val) => {
                    result += val.count;
                    return result;
                }, 0);
            }
        }
    }
</script>