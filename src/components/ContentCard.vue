<template>
    <div id="content-card">
        <div class="card-header flex flex-full-center">
            <router-link class="home-link" to="/"><Icon v-if="$route.path == '/work'" iconName="arrow-back" /></router-link>
            <LanguageSelector />
        </div>
        <div id="content" class="flex">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LanguageSelector from './Content/Partials/LanguageSelector.vue'
    import Icon from './Atoms/Icons.vue'
    import Home from './Content/Home.vue'

    export default {
        name: 'content-card',
        components: {
            LanguageSelector,
            Icon,
            Home
        }
    }
</script>
