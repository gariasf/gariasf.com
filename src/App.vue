<template>
    <div id="app" class="flex flex-dc flex-full-center">
        <ContentCard />
        <AppFooter />
        <SmOverlay />
    </div>  
</template>

<script>
    import SmOverlay from './components/SmOverlay.vue'
    import ContentCard from './components/ContentCard.vue'
    import AppFooter from './components/Content/Partials/AppFooter.vue'

    export default {
        name: 'app',
        components: {
            ContentCard,
            SmOverlay,
            AppFooter
        }
    }
</script>

<style lang="scss">
    /* TODO: Import styles per component */
    /* Import App Styles */
    @import 'assets/scss/styles.scss';
</style>
