<template>
    <nav class="nav">
        <!-- <router-link :to="{ name: 'men_s_outerwear.index' }">-->
        <div class="nav-item" ref="menOuterWear" @click="navigate">Men's Outwear</div>
        <!-- </router-link>-->
        <div class="nav-item" ref="ladiesOuterWear" @click="navigate">Ladies Outwear</div>
        <div class="nav-item" ref="mensTShirt" @click="navigate">Mens T-Shirt</div>
        <div class="nav-item" ref="ladiesTShirt" @click="navigate">Ladies T-Shirt</div>
        <div class="slider" v-bind:style="sliderStyle" key="1"></div>
    </nav>
</template>
<style>
    .nav .slider {
        height: 2px;
        background-color: teal;
        transition: all ease 200ms;
        position: absolute;
        bottom: 0;
    }

    .nav .nav-item {
        cursor: pointer;
    }
</style>
<script>
    import router from 'vue-router';

    export default {
        name: 'nav-header',
        data: () => ({
            route: {
                menOuterWear: 'menOuterWear',
                ladiesOuterWear: 'ladiesOuterWear',
                mensTShirt: 'menOuterWear',
                ladiesTShirt: 'menOuterWear'
            },
            sliderStyle: {}
        }),
        methods: {
            navigate(event) {
                var refs = Object.values(this.$refs);
                var active = Object.keys(this.$refs)[refs.indexOf(event.target)];
                this.$router.push({name: this.route[active]});
                var {left, width} = this.$refs[active].getBoundingClientRect();
                this.sliderStyle = {left: `${left}px`, right: `${innerWidth - (left + width)}px`}
            }
        },
        mounted: function () {
            var currentRoute = this.$route.name.split(".")[0]
            if (currentRoute !== 'home' && currentRoute !== "root") {
                var {left, width} = this.$refs[currentRoute].getBoundingClientRect();
                this.sliderStyle = {left: `${left}px`, right: `${innerWidth - (left + width)}px`}
            }
        }
    }
</script>