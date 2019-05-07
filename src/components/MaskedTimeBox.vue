<template>
  <div class="timebox">
    <ejs-maskedtextbox
      :customCharacters="customCharacters"
      mask="00:00 >PM"
      floatLabelType="Always"
    ></ejs-maskedtextbox>
  </div>
</template>
<script>
import Vue from "vue";
import { MaskedTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(MaskedTextBoxPlugin);

export default {
  name: "MaskedTimeBox",
  data() {
    return {
      customCharacters: {
        P: "P,A,a,p",
        M: "M,m"
      }
    };
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.timebox {
  .e-widget.e-control-wrapper.e-mask .e-maskedtextbox {
    width: 68px;
    height: 43px;
    padding: 0px;
    text-align: center;
    border-radius: 13px;
    border: 2px solid $blue-primary;
    background-color: $white;
    color: $red-light;
    font-family: Avenir-Medium;
    font-size: $font-xxs;
    font-weight: 500;
    line-height: 14px;
    text-transform: uppercase;

    @include ipad {
      width: 60px;
      height: 30px;
      border-radius: 8px;
      font-size: 9px;
    }
  }
}
</style>