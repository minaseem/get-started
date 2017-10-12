<style>
    .nav {
        display: flex;
        justify-content: space-around;
        padding: 15px 50px;
    }

    .app-header {
        text-align: center;
        background: url(../images/cart.svg) no-repeat 99% 0;
        margin: 5px 0;
        font-size: 1.2em;
    }
</style>
<template>
    <div>
        <router-link
                :to="{ name: 'home.index' }"
        >
            <div class="app-header">SHOP</div>
        </router-link>
        <nav class="nav">
            <router-link :to="{ name: 'men_s_outerwear.index' }">
                <div class="nav-item">Men's Outwear</div>
            </router-link>
            <div class="nav-item">Ladies Outwear</div>
            <div class="nav-item">Mens T-Shirt</div>
            <div class="nav-item">Ladies T-Shirt</div>
        </nav>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'default-layout'
    }
</script>