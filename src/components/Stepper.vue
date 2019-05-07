<template>
  <div class="stepper">
    <div class="stepper-wrapper">
      <span v-for="index in steps * 2 - 1" :class="getClass(index)" :key="index">
        <img
          v-if="getSymbol(index) === STEP_BEFORE"
          src="@/assets/images/ic_tick.png"
          alt="tick-icon"
        >
        {{ getSymbol(index) >= STEP_CURRENT ? getStep(index) : "" }}
      </span>
    </div>
  </div>
</template>
          
<script>
export default {
  name: "Stepper",
  data() {
    return {
      STEP_HYPEN: 0,
      STEP_BEFORE: 1,
      STEP_CURRENT: 2,
      STEP_AFTER: 3,
      steps: 3
    };
  },
  props: ["value"],
  methods: {
    getStep: function(index) {
      return parseInt((index + 1) / 2);
    },
    getSymbol: function(index) {
      if (!(index % 2)) return this.STEP_HYPEN;

      let step = this.getStep(index);
      if (step < parseInt(this.value)) return this.STEP_BEFORE;
      if (step > parseInt(this.value)) return this.STEP_AFTER;
      return this.STEP_CURRENT;
    },
    getClass: function(index) {
      switch (this.getSymbol(index)) {
        case this.STEP_HYPEN:
          return "hypen";
          break;
        case this.STEP_BEFORE:
          return "circle-before";
          break;
        case this.STEP_AFTER:
          return "circle-after";
          break;
        default:
          return "circle-current";
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/sass/base.scss";

@mixin circle($status, $borderColor, $color, $bgColor) {
  .circle-#{$status} {
    display: inline-block;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    text-align: center;
    padding: 3px 2px;
    font-family: Avenir-black;
    border: 4px solid $borderColor;
    color: $color;
    font-size: $font-md-2;
    background-color: $bgColor;

    @include ipad {
      font-size: 14px;
      width: 23px;
      height: 23px;
      border: 2px solid $borderColor;
    }

    @if ($status == "before") {
      img {
        width: 22px;
        height: 17px;

        @include ipad {
          width: 16px;
          height: 12px;
        }
      }
    }
  }
}

.stepper {
  position: absolute;
  right: 72px;

  @include desktop-md {
    right: 35px;
  }
  @include ipad {
    right: 19px;
  }

  .stepper-wrapper {
    display: flex;
    align-items: center;
    padding-top: 23px;

    @include ipad {
      padding-top: 14px;
    }

    @include circle("before", $blue-primary, $blue-primary, $blue-primary);
    @include circle("current", $blue-primary, $blue-primary, $white);
    @include circle("after", $red-light, $red-light, $white);

    .hypen {
      display: inline-block;
      width: 17px;
      height: 4px;
      background-color: $red-light;
      margin: 0px 4px;

      @include ipad {
        width: 10px;
        height: 2px;
        margin: 0px 2px;
      }
    }
  }
}
</style>