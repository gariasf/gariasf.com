<template>
    <div id="footer" class="flex flex-full-center no-select">
        <p>{{this.$root.lang.footer.name}}&nbsp;-&nbsp;{{this.currentYear}}&nbsp;-&nbsp;
            <a href="https://github.com/gariasf/gariasf.com" target="_blank">
                <Icon iconName="github" isSmall="true" />
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
