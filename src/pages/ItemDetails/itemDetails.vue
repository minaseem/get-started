<template>
    <div class="item-details">
        <img :src="url" alt="">
        <div>
            <div>{{meta.title}}</div>
            <div>${{meta.price}}</div>
            <div></div>
            <div>
                <strong>Description</strong>
                <p v-html="meta.description">
                </p>
            </div>
            <button v-on:click="addToCart">ADD TO CART</button>
        </div>
    </div>
</template>
<style>
    .item-details {
        display: flex;
    }
</style>
<script>
    import DefaultLayout from '../../layout/default.vue';
    import {mapState} from 'vuex'

    function decodeHtml(input) {
        input = input.replace(/&amp;/g, "&");
        input = input.replace(/&lt;/g, "<");
        input = input.replace(/&gt;/g, ">");
        return input;
    }

    export default {
        name: "item-details",
        props: ['itemId'],
        components: {
            DefaultLayout
        },
        beforeMount: function () {
            this.$store.dispatch("fetchMensOuterWear");
        },
        methods: {
            addToCart() {
                this.$store.dispatch("addToCart", this.meta);
            }
        },
        computed: {
            meta: function () {
                if (this.$store.state.mensOuterWear === "") {
                    return {};
                }
                var meta = this.$store.state.mensOuterWear.find(x => x.name === this.itemId)
                meta.description = decodeHtml(meta.description)
                return meta;
            },
            url() {
                return "data/polymer/es6-unbundled/" + this.meta.image;
            }
        }
    }
</script>