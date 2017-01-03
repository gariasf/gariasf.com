<template>
  <div id="app" class="flex flex-full-center">
    <ContentCard />
  </div>
</template>

<script>
import ContentCard from './components/ContentCard.vue'

export default {
  name: 'app',
  components: {
      ContentCard
  }
}
</script>

<style lang="scss">
    /* Import App Styles */
    @import 'assets/scss/styles.scss';
</style>
