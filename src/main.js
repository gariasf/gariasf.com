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
    { path: '/:lang(\\es|en|ca+)', component: App,
        children: [
            {
                path: '',
                component: Home,
            },
            {
                path: 'work',
                component: Work,
                meta: { zone: 'work' }
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
            lang: en /* Set the default language object */
        }
    },
    mounted () {
        if(this.$route.params.lang == undefined && (this.$route.path == "/" || this.$route.path == "/work")){ /* We want to redirect people to /en by default but only if they are accessing an "app zone" */
            this.lang = en;
            router.push({ path: '/en' + this.$route.path });
        }
        else if(this.$route.params.lang == "en"){ /* Else calculate which language to choose depending on the url param */
            this.lang = en
        } else if (this.$route.params.lang == "ca"){
            this.lang = ca
        } else if(this.$route.params.lang == "es"){
            this.lang = es
        }
    },
    methods: {
        updateLang: function(languageId) {
            /* Update current app language to the passed one, which is a prop from the clicked button */
            this.$route.params.lang = languageId;
            router.push({path: '/' + this.$route.params.lang + '/' + (this.$route.meta.zone || '')});

           /* Depending on the new language id, load it's corresponding language object */
           if(languageId == "en"){
                this.lang = en
           } else if (languageId == "ca"){
                this.lang = ca
           } else if(languageId == "es"){
                this.lang = es
           }
        },
        handleBack: function() {
            router.push({path: '/' + this.$route.params.lang + '/'}); /* Since we have the lang paremeter in the url, we can't just go back, we must compute the url */
        },
        backFrom404: function() {
            router.push({path: '/en/'}); /* Since we have the lang paremeter in the url, we can't just go back, we must compute the url */
        }
    }
}).$mount('#app-root')
