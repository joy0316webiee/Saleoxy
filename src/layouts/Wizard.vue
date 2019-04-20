<template>
  <div class="wizard">
    <Header />
    <transition name="fade-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Wizard',
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/sass/base.scss";

  /* Styling */
  .wizard {
    background-image: url("~@/assets/images/wizard_bg.png");
    background-size: cover;
    height: 1080px;
  }
</style>