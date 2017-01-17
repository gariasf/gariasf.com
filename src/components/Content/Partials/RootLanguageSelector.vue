<template>
    <div id="lang-selector" class="flex no-select">
            <div id="language-list" class="root-selector">
                <h1 class="root-ls-title m-auto">Language/Idioma:</h1>
                <LangButton languageString="English" languageId="en" :activeLanguage=$route.params.lang :handleMenu="handleMenu" />
                <LangButton languageString="Català" languageId="ca" :activeLanguage=$route.params.lang :handleMenu="handleMenu" />
                <LangButton languageString="Español" languageId="es" :activeLanguage=$route.params.lang :handleMenu="this.handleMenu" />
            </div>
    </div>
</template>

<script>
    import LangButton from './../../Atoms/LangButton.vue'
    import Icon from './../../Atoms/Icons.vue'
    
    /* Each button compares the 'activeLanguage', which is a root variable, to the button's corresponding 'languageId' in order to set 
    /* it's active state in the event that those two match.
    /* languageId is also the parameter passed to each button clickHandler wchich manages the language update.
    */

    export default {
        name: 'lang-selector',
        components: {
            LangButton,
            Icon
        },
        methods: {
            handleMenu: function(){
                //bump
            }
        }
    }
</script>
