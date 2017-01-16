<template>
    <div id="work-list">
        <div class="filter-tool flex flex-cross-center">
            <span class="filter-type flex flex-full-center pointer" v-on:click.prevent="manageFilter(0)"><Icon :name="currentFilter == 'all' ? 'ch-ch' : 'ch-empty'" />&nbsp;{{$root.lang.misc.all}}</span>
            <span class="filter-type flex flex-full-center pointer" v-on:click.prevent="manageFilter(1)"><Icon :name="currentFilter == 'client' ? 'ch-ch' : 'ch-empty'" />&nbsp;{{$root.lang.misc.client}}</span>
            <span class="filter-type flex flex-full-center pointer" v-on:click.prevent="manageFilter(2)"><Icon :name="currentFilter == 'nethruster' ? 'ch-ch' : 'ch-empty'" />&nbsp;Nethruster</span>
        </div>
        <div class="list-container">
            <ListItem v-for="item in this.workData" v-if="item.url && (item.type == currentFilter || currentFilter == 'all')" :workData="item" />
        </div>
    </div>
</template>

<script>
    import Icon from './../../../Atoms/Icons.vue'
    import ListItem from './../../../Atoms/ListItem.vue'
    import WorkData from './../../../../assets/work.js'

    export default {
        name: 'work-list',
        components: {
            Icon,
            ListItem
        },
        data: function(){
            return {
                workData: WorkData.workList,
                filters: ["all", "client", "nethruster"],
                currentFilter: 'all'
            }
        },
        methods: {
            manageFilter: function(filterId){
                this.currentFilter = this.filters[filterId];
            }
        }
    }
</script>
