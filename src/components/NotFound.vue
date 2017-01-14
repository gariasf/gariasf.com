<template>
    <div id="app" class="flex flex-dc flex-full-center">
       <span id="not-found">
            <h1 class="flex flex-full-center"><Icon name="not-found" />&nbsp;404 - Not Found</h1>
            <h2>{{this.$root.lang.notFound.wtf}}</h2>
            <p>{{this.$root.lang.notFound.help}} <router-link to="/" ><LargeButton :buttonText="this.$root.lang.notFound.homeLink" transparent="true" inline="true" /></router-link></p>
       </span>
       <SmOverlay />
    </div>
</template>

<script>
    import LargeButton from './Atoms/LargeButton.vue'
    import Icon from './Atoms/Icons.vue'
    import SmOverlay from './SmOverlay.vue'

    export default {
        name: 'not-found',
        components: {
            LargeButton,
            Icon,
            SmOverlay
        }
    }
</script>
