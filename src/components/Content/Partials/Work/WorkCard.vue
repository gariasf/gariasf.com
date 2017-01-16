<template>
    <div id="work-card" class="flex flex-full-center">
        <h1 class="work-not-found" v-if="!this.data[this.$route.params.work]">Sorry, I couldn't find that ID, please go back and try again.</h1>
        <span v-if="this.data[this.$route.params.work]">Details coming soon</span>
    </div>
</template>

<script>
    import Icon from './../../../Atoms/Icons.vue'
    import WorkData from './../../../../assets/work.js'

    export default {
        name: 'work-card',
        components: {
            Icon
        },
        beforeMount () {
            if(this.data[this.$route.params.work]){
                 this.currentData = this.data[this.$route.params.work];
            } else {
                return;
            }
        },
        data: function() {
            return {
                data: WorkData.workList,
                currentData: {}
            }
        }
    }
</script>
