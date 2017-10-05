<template>
    <div>
        <router-link :to="{ name: routeTo }">
            <img v-bind:src="src" alt="" class="shop-now-img fade-in">
        </router-link>
        <div class="sn-title">{{title}}</div>
        <div class="flex j-c sn">
            <router-link :to="{ name: routeTo }">
                <div class="sn-button">SHOP NOW</div>
            </router-link>
        </div>
    </div>
</template>
<style>
    .shop-now-img {
        max-width: 100%;
    }

    .sn-title {
        text-align: center;
        padding-top: 30px;
    }

    .sn-button {
        padding: 8px 20px;
        border: 2px solid #333;
        color: black;
    }

    .sn {
        padding: 30px 0;
    }
</style>
<script>
    var identity = (arg) => {
        return function () {
            return this[arg];
        }
    }
    export default {
        name: 'shop-now',
        props: ['title', 'src', 'routeTo'],
        data: {
            title: identity('title'),
            src: identity('src'),
            routeTo: identity('routeTo')
        }
    }
</script>