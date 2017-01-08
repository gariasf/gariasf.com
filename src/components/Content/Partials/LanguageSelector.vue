<template>
    <div id="lang-selector" class="flex">
       <LangButton language="es" :activeLanguage=activeLanguage :handleLang=updateLang />
       <LangButton language="en" :activeLanguage=activeLanguage :handleLang=updateLang />
       <LangButton language="ca" :activeLanguage=activeLanguage :handleLang=updateLang />
    </div>
</template>

<script>
    import LangButton from './../../Atoms/LangButton.vue'

    export default {
        name: 'lang-selector',
        components: {
            LangButton
        },
        data: function(){
            return {
                /* This data contains the current language setting of the app */
                activeLanguage: 'en'
            };
        },
        methods: {
            updateLang: function(object){
                /* Update current language to the object's language, which is the language prop from the clicked button */
                this.activeLanguage = object.language;
            }
        }
    }
</script>
