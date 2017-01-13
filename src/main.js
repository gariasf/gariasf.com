import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import VueTouchRipple from 'vue-touch-ripple'
import App from './App.vue'
import NotFound from './components/NotFound.vue'

/* Language objects */
import es from './assets/lang/langEs.js'
import en from './assets/lang/langEn.js'
import ca from './assets/lang/langCa.js'

/* Content components */
import Home from './components/Content/Home.vue'
import Work from './components/Content/Work.vue'

Vue.use(VueRouter)
Vue.use(VTooltip)
Vue.use(VueTouchRipple)

const router = new VueRouter({
    mode: 'history',
    routes: [
    { path: '/', component: App,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'work',
                component: Work
            }
        ],
    },
    /* If none of the above matches, show 404 err */
    {path: '*', component: NotFound}
  ]
})

new Vue({
    router,
    data () {
        return {
            languages: ['En', 'Ca', 'Es'], /* Array of aviable languages to map them with their corresponding id (pos) when necessary */
            activeLanguage: 0, /* Set the default active language */
            lang: en /* Set the default language object */
        }
    },
    methods: {
        updateLang: function(languageId){
            /* Update current app language to the passed one, which is a prop from the clicked button */
            this.activeLanguage = languageId;
           
           /* Depending on the new language id, load it's corresponding language object */
           if(languageId == 0){
                this.lang = en
           } else if (languageId == 1){
                this.lang = ca
           } else if(languageId == 2){
                this.lang = es
           }
        }
    }
}).$mount('#app-root')
