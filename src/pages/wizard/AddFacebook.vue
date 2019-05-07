<template>
  <div class="page-container facebook">
    <div class="page-head facebook-head">
      <div class="stepper-container">
        <div class="to-back">
          <router-link to="/login">
            <span class="to-back-icon">
              <img src="@/assets/images/ic_back.png" alt="to-back-icon">
            </span>
          </router-link>
          <span class="to-back-label">Back</span>
        </div>
        <Stepper value="1"/>
      </div>
      <div class="title" :class="{connected: connected}">
        <h1>Welcome Onboard!</h1>
        <h2>you’re 3 steps from setting up your workspace</h2>
      </div>
    </div>
    <div class="facebook-body">
      <FacebookDesc :connected="connected"/>
    </div>
    <div class="facebook-foot">
      <div v-if="connected" class="facebook-connected">
        <FacebookEdit/>
        <div class="btn-continue">
          <router-link to="/addcalendar">
            <button class="btn-blue">continue</button>
          </router-link>
        </div>
      </div>
      <div v-else class="facebook-onboard">
        <div class="facebook-foot-top">
          <p>- Automatic incoming message distribution according to queue rules</p>
          <p>- Familiar Saleoxy chat interface</p>
          <p>- All conversations are saved to CRM history</p>
        </div>
        <div class="facebook-foot-middle">
          <p>Please authorize with the Facebook account that manages your pages to receive messages from your Saleoxy clients.</p>
        </div>
        <div class="facebook-foot-bottom">
          <div class="bottom-desc">
            <p>You need to create your company Facebook page or use an existing one.</p>
          </div>
          <div class="bottom-button">
            <div class="facebook-mark-sm">
              <img src="@/assets/images/facebook_mark.png" alt="facebook-mark-sm">
            </div>
            <div class="btn-connect">
              <button class="btn-blue" v-on:click="connectFacebook()">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/Stepper.vue";
import FacebookDesc from "@/components/Facebook/FacebookDesc.vue";
import FacebookEdit from "@/components/Facebook/FacebookEdit.vue";

export default {
  name: "AddFacebook",
  components: {
    Stepper,
    FacebookDesc,
    FacebookEdit
  },
  data() {
    return {
      connected: false
    };
  },
  methods: {
    connectFacebook() {
      this.connected = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.facebook {
  .facebook-head {
    .title {
      &.connected {
        @include ipad {
          padding-top: 44px;

          h1 {
            margin-bottom: 7px;
          }
          h2 {
            margin-bottom: 15px;
          }
        }
      }

      h2 {
        @include desktop-md {
          margin-bottom: 31px;
        }
      }
    }
  }
  .facebook-body {
    padding: 0px 164px 0px 198px;

    @include desktop-md {
      padding: 0px 0px 0px 120px;
    }
    @include tablet {
      padding: 0px 0px 0px 44px;
    }
    @include ipad {
      padding: 0px 0px 0px 46px;
    }
  }
  .facebook-foot {
    .facebook-connected {
      .btn-continue {
        position: absolute;
        right: 72px;
        bottom: 18px;

        @include desktop-md {
          right: 37px;
        }
        @include ipad {
          right: 16px;
          bottom: 24px;
        }

        button {
          width: 193px;
          height: 58px;
          font-size: $font-md-3;
          line-height: 27px;
          letter-spacing: 1.12px;
          text-transform: uppercase;

          @include ipad {
            width: 109px;
            height: 33px;
            font-size: 14px;
            font-weight: 900;
            letter-spacing: 0.5px;
            line-height: 15px;
          }
        }
      }
    }
    .facebook-onboard {
      .facebook-foot-top {
        padding: 15px 0px 65px 298px;

        @include desktop-md {
          padding: 7px 0px 21px 218px;
        }
        @include tablet {
          padding: 7px 0px 21px 141px;
        }
        @include ipad {
          padding: 99px 42px 0px 36px;
        }

        p {
          font-size: $font-sm-2;
          line-height: 31px;
          margin: 0px;

          @include ipad {
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
      .facebook-foot-middle {
        p {
          font-size: $font-md-1;
          line-height: 30px;
          margin: 0px;
          padding: 0px 183px;
          text-align: center;
          color: $red-light;

          @include desktop-md {
            padding: 0px 76px;
          }
          @include tablet {
            padding: 16px 50px;
          }
          @include ipad {
            font-size: 10px;
            line-height: 15px;
            position: absolute;
            left: 22px;
            top: 541px;
            padding: 0px 22px 0px 0px;
          }
        }
      }
      .facebook-foot-bottom {
        display: flex;
        padding-left: 147px;
        padding-top: 45px;

        @include desktop-md {
          padding-left: 37px;
          padding-top: 39px;
        }
        @include ipad {
          padding-left: 96px;
          padding-top: 23px;
        }
        @include iphone {
          padding-left: 73px;
        }

        .bottom-desc {
          width: 580px;

          @include ipad {
            width: auto;
          }

          p {
            font-size: $font-md-1;
            line-height: 34px;
            margin: 0px;

            @include tablet {
              font-size: 16px;
            }
            @include ipad {
              position: absolute;
              left: 22px;
              top: 495px;
              padding-right: 22px;
              font-size: 10px;
              line-height: 18px;
              text-align: center;
            }
            @include iphone {
              top: 484px;
            }
          }
        }
        .bottom-button {
          display: flex;
          padding-left: 12px;

          @include desktop-md {
            padding-right: 20px;
          }
          @include ipad {
            padding-left: 0px;
          }

          .facebook-mark-sm {
            img {
              width: 57px;
              height: 57px;

              @include ipad {
                width: 39px;
                height: 40px;
              }
            }
          }
          .btn-connect {
            button {
              margin-left: 7px;

              @include ipad {
                width: 133px;
                height: 40px;
                margin-left: 5px;
                font-size: 17px;
              }
            }
          }
        }
      }
    }
  }
}
</style>