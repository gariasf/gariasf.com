<template>
    <span class="list-item flex flex-main-center">
        <a :href="url" target="_blank">
            <Icon name="link" />&nbsp;<span>{{title}}</span>
        </a>
        <a href="#!" class="view-more-link"><Icon name="details" /></a>
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
