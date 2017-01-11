<template>
    <div id="intro" class="flex flex-dc no-select">
        <div id="intro-title">
            <span class="my">{{this.$root.lang.intro.hello}}</span>
            {{this.$root.lang.intro.world}}.
        </div>
        <div id="intro-description">
            <p v-html="this.$root.lang.intro.desc"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'intro',
        components: {}
    }
</script>
