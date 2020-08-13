<template>
    <div style="height: 96vh;">
        <div class="topmenu">
            <nav-bar/>
        </div>
        <div>
            <app-main/>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/layout/components/NavBar.vue'
    import AppMain from '@/layout/components/AppMain.vue'

    export default {
        components: {
            AppMain,
            NavBar
        },
        name: "index"
    }
</script>

<style scoped>
    .topmenu {
        /*box-shadow: 0 1px 3px 0 rgba(26, 26, 26, .1); -webkit-box-shadow: 0 1px 3px 0 rgba(26, 26, 26, .1);*/
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(to right, #6aaeff, #bfc4ff, #6cc3d0, #b0c8ff, #e684ae) 1;
        background: #f3f3f3;
    }
</style>