<template>
    <div id="app" class="flex flex-dc flex-full-center language-prompt">
        <ContentCard />
        <AppFooter />
        <SmOverlay />
    </div>
</template>

<script>
    import SmOverlay from './../../SmOverlay.vue'
    import ContentCard from './../../ContentCard.vue'
    import AppFooter from './AppFooter.vue'

    export default {
        name: 'language-prompt',
        components: {
            ContentCard,
            SmOverlay,
            AppFooter
        }
    }
</script>
