<template>
    <div :class="['lang-button', 'pointer', {'active': activeLanguage == languageId}]" v-on:click="handleClick()">
        {{this.$root.languages[languageId]}}
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
