<template>
    <div id="lang-selector" class="flex">
       <LangButton languageId=0 :activeLanguage=this.$root.activeLanguage />
       <LangButton languageId=1 :activeLanguage=this.$root.activeLanguage />
       <LangButton languageId=2 :activeLanguage=this.$root.activeLanguage />
    </div>
</template>

<script>
    import LangButton from './../../Atoms/LangButton.vue'

    export default {
        name: 'lang-selector',
        components: {
            LangButton
        }
    }
</script>
