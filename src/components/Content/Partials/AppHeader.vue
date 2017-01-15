<template>
     <div class="card-header flex flex-full-center no-select">
            <a class="home-link" v-on:click.prevent="$root.handleBack()"><Icon v-if="$route.meta.zone == 'work'" name="arrow-back" pointer="true"/></a>
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
                if(this.$route.meta.zone == undefined){ /* If if we are at root path, we are home :) */
                    return 'account';
                } else if(this.$route.meta.zone == 'work'){
                    return 'array';
                } 
            },
            getTitle: function() {
                if(this.$route.meta.zone == undefined){ /* If if we are at root path, we are home :) */
                    return this.$root.lang.header.home;
                } else if(this.$route.meta.zone == 'work'){
                    return this.$root.lang.header.work;
                } 
            }
        }
    }
</script>
