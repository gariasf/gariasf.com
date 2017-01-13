<template>
    <span class="list-item flex flex-main-center">
        <a :href="url" target="_blank">
            <Icon name="link" />&nbsp;<span>{{title}}</span>
        </a>
        <Icon name="menu-down" pointer="true" />
    </span>
</template>

<script>
    import Icon from './Icons.vue'

    export default {
        name: 'list-item',
        components: {
            Icon
        },
        props: ['item-name', 'title', 'url']
    }
</script>
