<template>
    <div id="work-card" class="flex flex-dc flex-full-center">
        <h1 class="work-not-found" v-if="!this.data[this.$route.params.work]">Sorry, I couldn't find that ID, please go back and try again.</h1>
        <span style="margin: 10px;">Details coming soon</span>
        <a v-if="this.data[this.$route.params.work]" :href="this.data[this.$route.params.work].url" target="_blank" rel="noopener"><LargeButton :buttonText="'Visit ' + this.data[this.$route.params.work].title"/></a>
    </div>
</template>

<script>
    import Icon from './../../../Atoms/Icons.vue'
    import LargeButton from './../../../Atoms/LargeButton.vue'
    import WorkData from './../../../../assets/work.js'

    export default {
        name: 'work-card',
        components: {
            Icon,
            LargeButton
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
