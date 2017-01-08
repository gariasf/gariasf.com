import Vue from 'vue'
import App from './App.vue'
import es from './assets/lang/langEs.js'
import en from './assets/lang/langEn.js'
import ca from './assets/lang/langCa.js'

new Vue({
    el: '#app-root',
    render: h => h(App),
    data () {
        return {
            languages: ['En', 'Ca', 'Es'],
            activeLanguage: 0,
            lang: en
        }
    },
    created: function(){
        /* Set initial language setting */
        this.$root.lang = en;
    },
    methods: {
        updateLang: function(languageId){
            /* Update current language to the passed one, which is the prop from the clicked button */
            this.activeLanguage = languageId;
           
           if(languageId == 0){
                this.lang = en
           } else if (languageId == 1){
                this.lang = ca
           } else if(languageId == 2){
                this.lang = es
           }
        }
    }
})
