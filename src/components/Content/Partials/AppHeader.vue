<template>
     <div class="card-header flex flex-full-center">
            <router-link class="home-link" to="/"><Icon v-if="$route.path == '/work'" iconName="arrow-back" /></router-link>
            <span id="content-title" class="flex-cross-center">
                <Icon :iconName="getIconName()" isSmall="true" />&nbsp;<span>{{this.getTitle()}}</span>
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
                let trimmedPath = /\w+/.exec(this.$route.path);
                if(trimmedPath == null){
                    return 'account';
                } else if(trimmedPath[0] == 'work'){
                    return 'array';
                } 
            },
            getTitle: function() {
                let trimmedPath = /\w+/.exec(this.$route.path);
                if(trimmedPath == null){
                    return this.$root.lang.header.home;
                } else if(trimmedPath[0] == 'work'){
                    return this.$root.lang.header.work;
                } 
            }
        }
    }
</script>
