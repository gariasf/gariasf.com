<template>
    <div id="footer" class="flex flex-full-center">
        <p>{{this.$root.lang.footer.name}}&nbsp;-&nbsp;{{this.currentYear}}&nbsp;-&nbsp;{{this.$root.lang.footer.fromGithub}}&nbsp;<a href="https://github.com/gariasf/gariasf.com" target="_blank"><SocialIcon iconName="github" isSmall="true" /></a>&nbsp;-&nbsp;<a href="http://codepen.io/kekkorider/pen/RaPWwe" target="_blank">{{this.$root.lang.footer.inspiredBy}}</a></p>
    </div>
</template>

<script>
    import SocialIcon from './../../Atoms/SocialIcon.vue'

    export default {
        name: 'app-footer',
        components: {
            SocialIcon
        },
        data: function(){
            return {
                currentYear: this.getYear()
            }
        },
        methods: {
            getYear: function(){
                return new Date().getFullYear();
            }
        }
    }
</script>
