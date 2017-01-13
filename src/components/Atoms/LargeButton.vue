<template>
    <div class="large-button pointer" v-touch-ripple>
        <p>{{buttonText}}</p>
    </div>
</template>

<script>
    export default {
        name: 'largeButton',
        components: {},
        props: ['buttonText']
    }
</script>
