<template>
    <div class="lang-button pointer" v-on:click="handleClick()">
        {{this.$root.languages[languageId]}}&nbsp;<span v-if="activeLanguage == languageId">{{this.$root.lang.misc.active}}</span>
    </div>
</template>

<script>
    export default {
        name: 'lang-button',
        components: {},
        props: ['languageId', 'activeLanguage'],
        methods: {
            handleClick: function(){
                /* Send the button language prop to manage the new language to be set */
                this.$root.updateLang(this.languageId);
            }
        }
    }
</script>
