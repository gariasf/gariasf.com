<template>
    <div id="intro" class="flex flex-dc no-select">
        <div id="intro-title">
            <span class="my">{{this.$root.lang.intro.hello}}</span>
            {{this.$root.lang.intro.world}}.
        </div>
        <div id="intro-description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum sit aut quos quia temporibus officia veniam, ducimus esse non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, obcaecati.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'intro',
        components: {}
    }
</script>
