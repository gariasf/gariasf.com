<template>
    <div id="footer" class="flex flex-full-center no-select">
        <p>{{this.$root.lang.footer.name}}&nbsp;-&nbsp;{{this.currentYear}}&nbsp;-&nbsp;
            <a href="https://github.com/gariasf/gariasf.com" v-tooltip.bottom-center="this.$root.lang.tooltip.githubSrc" target="_blank">
                <Icon name="github" isSmall="true" pointer="true" />
            </a>
        </p>
    </div>
</template>

<script>
    import Icon from './../../Atoms/Icons.vue'
    
    export default {
        name: 'app-footer',
        components: {
            Icon
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
