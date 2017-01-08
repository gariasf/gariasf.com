<template>
    <div v-bind:class="['lang-button', 'pointer', {'active': activeLanguage == language}]" v-on:click="handleClick()">
        {{language}}
    </div>
</template>

<script>
    export default {
        name: 'lang-button',
        components: {},
        props: ['language', 'activeLanguage', 'handleLang'],
        methods: {
            handleClick: function(){
                /* Pass the object to the parent to manage the new language to be set */
                this.handleLang(this);
            }
        }
    }
</script>
