<template>
     <div class="card-header flex flex-full-center no-select">
            <router-link class="home-link" to="/"><Icon v-if="$route.path == '/work'" name="arrow-back" pointer="true"/></router-link>
            <span id="content-title" class="flex-cross-center">
                <Icon :name="getIconName()" isSmall="true" />&nbsp;<span>{{this.getTitle()}}</span>
            </span>
            <LanguageSelector />
        </div>
</template>

<script>
    import LanguageSelector from './LanguageSelector.vue'
    import Icon from './../../Atoms/Icons.vue'

    export default {
        name: 'app-header',
        components: {
            LanguageSelector,
            Icon
        },
        methods: {
            getIconName: function(){
                /* Remove special chars */
                let trimmedPath = /\w+/.exec(this.$route.path);

                if(trimmedPath == null){ /* If if we are at root path, we are home :) */
                    return 'account';
                } else if(trimmedPath[0] == 'work'){
                    return 'array';
                } 
            },
            getTitle: function() {
                 /* Remove special chars */
                let trimmedPath = /\w+/.exec(this.$route.path);

                if(trimmedPath == null){ /* If if we are at root path, we are home :) */
                    return this.$root.lang.header.home;
                } else if(trimmedPath[0] == 'work'){
                    return this.$root.lang.header.work;
                } 
            }
        }
    }
</script>
