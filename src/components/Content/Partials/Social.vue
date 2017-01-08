<template>
    <div id="social" class="flex">
        <SocialIcon iconName="twitter"/>
        <SocialIcon iconName="github"/>
        <SocialIcon iconName="telegram"/>
    </div>
</template>

<script>
    import SocialIcon from './../../Atoms/SocialIcon.vue'
    
    export default {
        name: 'social',
        components: {
            SocialIcon
        }
    }
</script>
