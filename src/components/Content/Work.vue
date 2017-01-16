<template>
    <div id="work" class="flex no-select">
        <transition :name="($route.meta.zone == 'work-det') ? 'slide-from-right' : 'slide-from-left'">
            <router-view></router-view>
        </transition>
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
