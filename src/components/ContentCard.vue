<template>
  <div id="content-card">
    <div class="card-header flex flex-full-center">
        home
    </div>
    <Home />
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
