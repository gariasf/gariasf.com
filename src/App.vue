<template>
    <div id="app" class="flex flex-full-center">
        <ContentCard />
        <Gtfo />
    </div>  
</template>

<script>
    import Gtfo from './components/Gtfo.vue'
    import ContentCard from './components/ContentCard.vue'

    export default {
        name: 'app',
        components: {
            ContentCard,
            Gtfo
        }
    }
</script>

<style lang="scss">
    /* Import App Styles */
    @import 'assets/scss/styles.scss';
</style>
