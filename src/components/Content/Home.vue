<template>
    <div id="home" class="flex">
        <div id="home-up" class="flex flex-main-center">
            <Intro />
            <Profile />
        </div>
        <Social />
    </div>
</template>

<script>
    import Intro from './../Content/Partials/Home/Intro.vue'
    import Profile from './../Content/Partials/Home/Profile.vue'
    import Social from './../Content/Partials/Home/Social.vue'

    export default {
        name: 'home',
        components: {
            Intro,
            Profile,
            Social
        }
    }
</script>
