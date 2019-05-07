<template>
  <div class="page-container calendar">
    <div class="page-head calendar-head">
      <div class="stepper-container">
        <div class="to-back">
          <router-link to="/addfacebook">
            <span class="to-back-icon">
              <img src="@/assets/images/ic_back.png" alt="to-back-icon">
            </span>
          </router-link>
          <span class="to-back-label">Back</span>
        </div>
        <Stepper value="2"/>
      </div>
      <div class="title">
        <h1>Welcome Onboard!</h1>
        <h2>you’re 2 steps from setting up your workspace</h2>
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-body-top">
        <h3>Connect your google calendar</h3>
      </div>
      <div class="calendar-body-middle">
        <div class="calendar-body-mark">
          <img src="@/assets/images/calendar.png" alt="calendar-body-mark">
        </div>
        <div class="calendar-body-connect">
          <button class="btn-blue">
            <span v-if="connected">Connected</span>
            <span v-else>Connect</span>
          </button>
        </div>
      </div>
      <div v-if="connected" class="calendar-connected">
        <div class="calendar-body-bottom">
          <div class="user-icon">
            <img src="@/assets/images/ic_user_red.png" alt="user-icon-red">
          </div>
          <div class="user-desc">
            <h4>John Smith</h4>
            <a href="#">Disconnect</a>
          </div>
        </div>
      </div>
      <div v-else class="calendar-preconnect">
        <div class="calendar-body-bottom">
          <p>Click in Connect to link your Saleoxy channel to complete the account linking process.</p>
        </div>
      </div>
    </div>
    <div class="calendar-foot">
      <button class="btn-blue" v-on:click="continueNext()" :class="{connected: connected}">
        <span class="text-desk">CONTINUE</span>
        <span class="text-mb">{{connected ? "CONTINUE" : "SKIP"}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Stepper from "@/components/Stepper.vue";

export default {
  name: "AddGoogleCalendar",
  components: {
    Stepper
  },
  data() {
    return {
      connected: false
    };
  },
  methods: {
    continueNext() {
      if (this.connected) {
        this.$router.push("/addappointment");
      } else {
        this.connected = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.calendar {
  .calendar-head {
    .title {
      @include ipad {
        padding-top: 74px;
      }

      h2 {
        margin-bottom: 0px;
      }
    }
  }
  .calendar-body {
    .calendar-body-top {
      h3 {
        text-align: center;
        color: $blue-primary;
        font-family: Avenir-Black;
        font-size: $font-lg-3;
        margin-top: 51px;
        margin-bottom: 60px;

        @include ipad {
          margin-top: 35px;
          margin-bottom: 47px;
          font-size: 20px;
          font-weight: 900;
        }
      }
    }
    .calendar-body-middle {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      @include ipad {
        flex-direction: column;
      }

      .calendar-body-mark {
        img {
          width: 78px;

          @include ipad {
            width: 58px;
            margin-bottom: 20px;
          }
        }
      }
      .calendar-body-connect {
        padding-left: 23px;

        @include ipad {
          padding: 0px;
        }

        button {
          width: 264px;
          height: 78px;
          font-size: $font-xl-2;
          letter-spacing: 1.22px;
          line-height: 37px;

          @include ipad {
            width: 194px;
            height: 58px;
            font-size: 25px;
            font-weight: 900;
            letter-spacing: 0.9px;
            line-height: 27px;
          }
        }
      }
    }
    .calendar-preconnect {
      .calendar-body-bottom {
        p {
          color: $red-light;
          margin: 0px;
          text-align: center;
          padding: 53px 117px 0px 198px;
          font-size: $font-sm-3;

          @include desktop-md {
            padding: 49px 120px 0px 120px;
          }
          @include tablet {
            padding: 68px 120px 0px 120px;
          }
          @include ipad {
            padding: 48px 24px 0px 22px;
            font-size: 10px;
            text-align: left;
          }
        }
      }
    }
    .calendar-connected {
      .calendar-body-bottom {
        display: flex;
        justify-content: center;
        margin-top: 34px;

        @include tablet {
          margin-top: 56px;
        }
        @include ipad {
          margin-top: 35px;
        }

        .user-icon {
          img {
            width: 59px;
            height: 54px;

            @include ipad {
              width: 20px;
              height: 18px;
            }
          }
        }
        .user-desc {
          margin-left: 15px;

          @include ipad {
            margin-left: 29px;
          }

          h4 {
            margin: 0px;
            color: $blue-primary;
            font-family: Avenir-Black;
            font-size: $font-lg-2;

            @include ipad {
              font-size: 24px;
              font-weight: 800;
            }
          }
          a {
            text-decoration: none;
            color: $red-light;
            font-size: $font-sm-1;
            font-weight: 400;
            color: $blue-primary;

            @include ipad {
              font-size: 17px;
            }
          }
        }
      }
    }
  }
  .calendar-foot {
    text-align: right;
    position: absolute;
    right: 72px;
    bottom: 18px;

    @include tablet {
      bottom: 44px;
    }
    @include ipad {
      right: 16px;
      bottom: 24px;
    }

    button {
      @include ipad {
        width: 63px;
        height: 33px;
        font-size: 14px;
        font-weight: 900;

        &.connected {
          width: 109px;
          height: 33px;
        }
      }

      .text-desk {
        @include ipad {
          display: none;
        }
      }
      .text-mb {
        display: none;

        @include ipad {
          display: inherit;
        }
      }
    }
  }
}
</style>