<template>
    <div id="content-card">
        <AppHeader />
        <div id="content" class="flex">
            <!-- vue-router will place a component here -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppHeader from './Content/Partials/AppHeader.vue'
    import Home from './Content/Home.vue'

    export default {
        name: 'content-card',
        components: {
            AppHeader,
            Home
        }
    }
</script>
