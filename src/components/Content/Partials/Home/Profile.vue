<template>
    <div id="profile" class="flex flex-dc flex-full-center no-select">
        <div id="image" class="m-auto">
            <img src="../../../../assets/img/profile.png" alt="" class="img-responsive">
        </div>
        <a v-on:click.prevent="handleWork()"><LargeButton :buttonText=this.$root.lang.misc.workButton /></a>
    </div>
</template>

<script>
    import LargeButton from './../../../Atoms/LargeButton.vue'

    export default {
        name: 'profile',
        components: {
            LargeButton
        },
        methods: {
            handleWork: function() {
                this.$router.push({path:  '/' + this.$route.params.lang + '/work'});
            }
        }
    }
</script>
