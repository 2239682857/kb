<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"/>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() {
                return this.$route.fullPath
            }
        }
    }
</script>

<style scoped>
    .app-main {
        /*50 = navbar  */
        min-height: calc(100vh - 54px);
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .fixed-header + .app-main {
        padding-top: 50px;
        height: 100vh;
        overflow: auto;
    }
</style>