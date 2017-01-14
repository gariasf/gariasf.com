<template>
    <div :class="['large-button', 'pointer', {'inline': inline == 'true'}, {'transparent': transparent == 'true'}]" v-touch-ripple>
        <p class="button-text">{{buttonText}}</p>
    </div>
</template>

<script>
    export default {
        name: 'largeButton',
        components: {},
        props: ['buttonText', 'inline', 'transparent']
    }
</script>
