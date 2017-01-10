<template>
    <div id="profile" class="flex flex-dc flex-full-center no-select">
        <div id="image" class="m-auto">
            <img src="../../../../assets/img/sample-profile.png" alt="" class="img-responsive">
        </div>
        <router-link to="work"><LargeButton :buttonText=this.$root.lang.misc.workButton /></router-link>
    </div>
</template>

<script>
    import LargeButton from './../../../Atoms/LargeButton.vue'

    export default {
        name: 'profile',
        components: {
            LargeButton
        }
    }
</script>
