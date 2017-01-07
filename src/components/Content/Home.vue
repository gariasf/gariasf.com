<template>
  <div id="home" class="flex flex-main-center">
    <div id="intro">
        <div id="intro-title">
            <span class="my">Hello</span>
            World.
        </div>
        <div id="intro-description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum sit aut quos quia temporibus officia veniam, ducimus esse non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, obcaecati.
            </p>
        </div>
    </div>
    <div id="profile" class="flex flex-dc flex-full-center">
        <div id="image" class="m-auto">
            <img src="../../assets/img/sample-profile.png" alt="" class="img-responsive">
        </div>
        <LargeButton />
    </div>
  </div>
</template>

<script>
    import LargeButton from './../Atoms/LargeButton.vue'

  export default {
    name: 'home',
    components: {
        LargeButton
    }
  }
</script>
