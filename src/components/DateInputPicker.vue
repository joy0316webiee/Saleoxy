<template>
  <div class="date-input-picker" v-click-outside="hide">
    <div class="date-input">
      <input type="tel" v-mask="'##/##/####'" placeholder="mm/dd/yyyy" @click="toggle()" readonly>
    </div>
    <div class="date-picker" v-show="opened">
      <DatePicker :isPopup="true"/>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import ClickOutside from "vue-click-outside";
import DatePicker from "@/components/DatePicker.vue";

export default {
  name: "DateInputPicker",
  components: {
    DatePicker
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = true;
      console.log("adsf");
    },
    hide() {
      this.opened = false;
    }
  },
  directives: {
    ClickOutside,
    mask
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#707070);

.date-input-picker {
  width: fit-content;
  position: relative;

  .date-input {
    width: 164px;
    height: 37px;
    border-radius: 4px;
    border: 1px solid #ff9201;
    background-color: #ffffff;
    overflow: hidden;
    background: #ffffff url("~@/assets/images/arr_down_yellow.png") no-repeat
      93% 50%;
    background-size: 22px 12px;

    @include ipad {
      width: 243px;
    }

    input {
      padding: 8px 12px;
      width: 100%;
      border: none;
      box-shadow: none;
      background: transparent;
      background-image: none;
      -webkit-appearance: none;
      color: #707070;
      font-family: Avenir;
      font-size: 16px;
      font-weight: 500;
      line-height: 15px;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .date-picker {
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: 2;
    background-color: #d3d4fc;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
  }
}
</style>