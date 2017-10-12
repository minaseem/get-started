<template>
    <router-link :to="{name: 'men_s_outerwear.details', params: {itemId: meta.name}}" append>
        <div class="shop-item">
            <img v-bind:src="url" alt="Image not found" class="fade-in"/>
            <div class="meta">
                <div>{{meta.title}}</div>
                <div>{{meta.price}} $</div>
            </div>
        </div>
    </router-link>
</template>
<style>
    .shop-item {
        display: flex;
        flex-direction: column;
        width: 180px;
        margin: 0 30px;
        cursor: pointer;
    }

    .shop-item .meta {
        text-align: center;
    }

    .shop-item img {
        text-align: center;
        line-height: 100px;
        height: 180px;
        width: 180px;
    }
</style>
<script>
    var identityF = r => () => r;
    export default {
        name: 'shop-item',
        props: ['meta'],
        data: identityF({
            /*url: () => {
                return "data/polymer/" + meta.url;
            }*/
        }),
        computed: {
            url: function () {
                return "data/polymer/es6-unbundled/" + this.meta.image
            }
        }
    }
</script>