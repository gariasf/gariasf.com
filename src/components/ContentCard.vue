<template>
    <div id="content-card">
        <div class="card-header flex flex-full-center">
            <LanguageSelector />
        </div>
        <div id="content" class="flex">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LanguageSelector from './Content/Partials/LanguageSelector.vue'
    import Home from './Content/Home.vue'

    export default {
        name: 'content-card',
        components: {
            Home,
            LanguageSelector
        }
    }
</script>
