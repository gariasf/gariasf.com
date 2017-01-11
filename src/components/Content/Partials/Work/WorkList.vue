<template>
    <div id="work-list" class="flex flex-dc">
        <ListItem v-for="item in workData" v-if="item.url" :title="item.title" :item-name="item.name" :url="item.url" />
    </div>
</template>

<script>
    import ListItem from './../../../Atoms/ListItem.vue'
    import WorkData from './../../../../assets/work.js'

    export default {
        name: 'work-list',
        components: {
            ListItem
        },
        data: function(){
            return {
                workData: WorkData
            }
        }
    }
</script>
