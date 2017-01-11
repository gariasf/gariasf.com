<template>
    <span class="grid-tile flex flex-dc flex-full-center pointer">
        <Icon :name="title" />
        <span>ByteTime</span>
    </span>
</template>

<script>
    import Icon from './Icons.vue'

    export default {
        name: 'tile',
        components: {
            Icon
        },
        props: ['title']
    }
</script>
