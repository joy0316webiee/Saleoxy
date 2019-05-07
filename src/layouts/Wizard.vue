<template>
  <div class="layout wizard">
    <HeaderWizard/>
    <transition name="fade-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import HeaderWizard from "@/components/Header/HeaderWizard.vue";

export default {
  name: "Wizard",
  components: {
    HeaderWizard
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
</style>