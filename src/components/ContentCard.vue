<template>
    <div id="content-card">
        <div class="card-header flex flex-full-center">
            <!--LANGUAGES-->
        </div>
        <div id="content" class="flex">
            <Home />
        </div>
    </div>
</template>

<script>
    import Home from './Content/Home.vue'

    export default {
        name: 'content-card',
        components: {
            Home
        }
    }
</script>
