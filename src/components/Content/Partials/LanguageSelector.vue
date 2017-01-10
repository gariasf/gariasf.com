<template>
    <div id="lang-selector" class="flex no-select">
        <a v-on:click.prevent="handleClick()"><Icon iconName="earth" /></a>
        <div v-if="this.listActive" id="language-list">
            <LangButton languageId=0 :activeLanguage=this.$root.activeLanguage />
            <LangButton languageId=1 :activeLanguage=this.$root.activeLanguage />
            <LangButton languageId=2 :activeLanguage=this.$root.activeLanguage />
        </div>
    </div>
</template>

<script>
    import LangButton from './../../Atoms/LangButton.vue'
    import Icon from './../../Atoms/Icons.vue'
    
    /* Each button compares the 'activeLanguage', which is a root variable, to the button's corresponding 'languageId' in order to set it's active state if those two match.
    /* languageId is also the parameter passed to each button clickHandler wchich manages the language update.
    */

    export default {
        name: 'lang-selector',
        components: {
            LangButton,
            Icon
        },
        data: function() {
            return {
                listActive: false
            }
        },
        methods: {
            handleClick: function() {
                this.listActive = !this.listActive;
            }
        }
    }
</script>
