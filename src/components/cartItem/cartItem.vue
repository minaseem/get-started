<template>
    <div class="cart-item">
        <img v-bind:src="imgUrl" alt="">
        <div class="title">{{meta.title}}</div>
        <div class="qty">
            <span>Qty:&nbsp;</span>
            <select v-model="meta.count">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        <div class="size">
            <span>Size:&nbsp;</span>
            <span>{{meta.size}}</span>
        </div>
        <div>{{meta.price}}</div>
        <div class="remove" @click="removeItem">&#215;</div>
    </div>
</template>
<style>
    .cart-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cart-item .qty, .cart-item .size {
        display: flex
    }

    .cart-item img {
        height: 72px;
        width: 72px;
    }

    .cart-item .remove {
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'cart-item',
        props: ['meta'],
        computed: {
            imgUrl() {
                return "data/polymer/es6-unbundled/" + this.meta.image;
            }
        },
        methods: {
            removeItem() {
                this.$store.commit("removeItem", this.meta.name)
            }
        }
    }
</script>