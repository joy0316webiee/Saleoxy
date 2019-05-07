<template>
  <div class="facebook-desc" :class="{'update': forUpdate}">
    <div class="facebook-mark-lg">
      <img src="@/assets/images/facebook_mark.png" alt="facebook-mark-lg">
    </div>
    <div class="facebook-body-desc" :class="{connected: connected}">
      <h3>Communicate with Facebook users via Saleoxy</h3>
      <p>
        Connect your company’s Facebook page to Open Channels
        and communicate with Facebook users via Saleoxy.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacebookDesc",
  props: {
    connected: {
      required: false,
      type: Boolean
    },
    forUpdate: {
      required: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.facebook-desc {
  display: flex;

  .facebook-mark-lg {
    img {
      width: 80px;
      height: 80px;

      @include ipad {
        width: 57px;
        height: 58px;
      }
    }
  }
  .facebook-body-desc {
    padding-left: 20px;

    @include ipad {
      padding-left: 10px;
    }
    &.connected p {
      @include ipad {
        top: 181px;
        padding-right: 13px;
      }
      @include iphone {
        padding-right: 48px;
      }
    }

    h3 {
      color: $blue-primary;
      font-family: Avenir-Black;
      margin: 0px;
      font-size: $font-sm-3;
      line-height: 30px;

      @include ipad {
        font-size: 12px;
        line-height: 23px;
        padding: 12px 48px 0px 0px;
      }
    }
    p {
      color: $black-primary;
      margin: 0px;
      font-size: $font-xs-2;
      line-height: 28px;
      padding-right: 196px;

      @include desktop-md {
        padding-right: 179px;
      }
      @include tablet {
        padding-right: 70px;
      }
      @include ipad {
        font-size: 13px;
        line-height: 21px;
        position: absolute;
        left: 36px;
        top: 239px;
        padding-right: 39px;
      }
    }
  }

  &.update {
    .facebook-mark-lg {
      img {
        width: 122px;
        height: 122px;

        @include desktop-md-fa {
          width: 100px;
          height: 100px;
        }
        @include tablet {
          width: 80px;
          height: 80px;
        }
        @include ipad {
          width: 67px;
          height: 67px;
        }
      }
    }
    .facebook-body-desc {
      padding-left: 32px;

      @include ipad {
        padding-left: 11px;
      }

      h3 {
        color: #164bcd;
        font-family: Avenir-black;
        font-size: 33px;
        font-weight: 900;
        margin-top: 10px;

        @include desktop-md-fa {
          font-size: 28px;
        }
        @include tablet {
          font-size: 20px;
        }
        @include ipad {
          font-size: 12px;
          padding: 6px 48px 0px 0px;
        }
      }
      p {
        color: #000000;
        font-family: Avenir;
        font-size: 26px;
        font-weight: 400;
        margin-top: 11px;
        line-height: 33px;

        @include desktop-md-fa {
          font-size: 20px;
          margin-top: 1px;
          padding-right: 165px;
        }
        @include tablet {
          font-size: 16px;
          line-height: 20px;
          padding-right: 41px;
        }
        @include ipad {
          font-size: 13px;
          left: 48px;
          top: 157px;
        }
        @include iphone {
          left: 25px;
        }
      }
    }
  }
}
</style>