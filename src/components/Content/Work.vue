<template>
    <div id="work" class="flex no-select">
        <WorkList />
    </div>
</template>

<script>
    import WorkList from './Partials/Work/WorkList.vue'

    export default {
        name: 'work',
        components: {
            WorkList
        }
    }
</script>
