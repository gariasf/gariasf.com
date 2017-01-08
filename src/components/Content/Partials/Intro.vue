<template>
    <div id="intro" class="flex flex-dc">
        <div id="intro-title">
            <span class="my">Hello</span>
            World.
        </div>
        <div id="intro-description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum sit aut quos quia temporibus officia veniam, ducimus esse non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, obcaecati.
            </p>
        </div>
        <Social />
    </div>
</template>

<script>
    import Social from './Social.vue'

    export default {
        name: 'intro',
        components: {
            Social
        }
    }
</script>
