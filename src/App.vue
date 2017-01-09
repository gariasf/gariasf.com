<template>
    <div id="app" class="flex flex-full-center">
        <ContentCard />
        <SmOverlay />
    </div>  
</template>

<script>
    import SmOverlay from './components/SmOverlay.vue'
    import ContentCard from './components/ContentCard.vue'

    export default {
        name: 'app',
        components: {
            ContentCard,
            SmOverlay
        }
    }
</script>

<style lang="scss">
    /* Import App Styles */
    @import 'assets/scss/styles.scss';
</style>
