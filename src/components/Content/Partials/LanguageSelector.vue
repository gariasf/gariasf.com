<template>
    <div id="lang-selector" class="flex no-select" v-on-clickaway.prevent="handleClickAway" v-tooltip.left-middle="this.$root.lang.tooltip.languageMenu">
        <a v-on:click.prevent="handleClick()"><Icon name="earth" pointer="true" /></a>
        <transition name="translate">
        <div v-if="this.listActive" id="language-list">
            <LangButton languageId=0 :activeLanguage=this.$root.activeLanguage />
            <LangButton languageId=1 :activeLanguage=this.$root.activeLanguage />
            <LangButton languageId=2 :activeLanguage=this.$root.activeLanguage />
        </div>
        </transition>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';
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
        mixins: [ clickaway ],
        data: function() {
            return {
                listActive: false,
            }
        },
        methods: {
            handleClick: function() {
                this.listActive = !this.listActive;
            },
            handleClickAway: function() {
                if(this.listActive) {
                    this.listActive = !this.listActive;
                } else {
                    return;
                }
            }
        }
    }
</script>
