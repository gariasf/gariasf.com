<template>
    <span class="list-item flex flex-main-center">
        <a :href="workData.url" target="_blank" rel="noopener">
            <Icon name="link" />&nbsp;<span>{{workData.title}}</span>
        </a>
        <a v-on:click.prevent="handleClick" class="view-more-link pointer"><Icon name="forward-arrow" /></a>
    </span>
</template>

<script>
    import Icon from './Icons.vue'
    import WorkCard from './../Content/Partials/Work/WorkCard.vue'

    export default {
        name: 'list-item',
        components: {
            Icon
        },
        props: ['workData'],
        methods: {
            handleClick: function(){
                this.$root.handleWorkFromId(this.workData.id);
            }
        }
    }
</script>
