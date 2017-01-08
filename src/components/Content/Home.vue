<template>
    <div id="home" class="flex flex-main-center">
        <Intro />
        <Profile />
    </div>
</template>

<script>
    import Intro from './../Content/Partials/Intro.vue'
    import Profile from './../Content/Partials/Profile.vue'    

    export default {
        name: 'home',
        components: {
            Intro,
            Profile
        }
    }
</script>
