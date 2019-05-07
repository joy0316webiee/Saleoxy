<template>
  <div class="page-container complete">
    <div class="page-head complete-head">
      <div class="stepper-container">
        <div class="to-back">
          <router-link to="/addappointment">
            <span class="to-back-icon">
              <img src="@/assets/images/ic_back.png" alt="to-back-icon">
            </span>
          </router-link>
          <span class="to-back-label">Back</span>
        </div>
        <div class="stepper">
          <Stepper value="4"/>
        </div>
      </div>
      <div class="sale-logo">
        <img src="@/assets/images/saleoxy_logo_blue.png" alt="saleoxy-logo-blue">
      </div>
      <div class="title">
        <h1>Welcome Onboard!</h1>
        <h2>THANK YOU !</h2>
      </div>
    </div>
    <div class="complete-body">
      <div class="complete-body-robot">
        <img src="@/assets/images/robot1.png" alt="robot">
      </div>
      <div class="complete-body-tick">
        <span>
          <img src="@/assets/images/ic_tick.png" alt="tick-icon">
        </span>
      </div>
      <div class="complete-body-desc">
        <p>CLICK START TO RUN YOUR WORKSPACE</p>
      </div>
    </div>
    <div class="complete-foot">
      <button class="btn-blue">START</button>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/Stepper.vue";

export default {
  name: "Complete",
  components: {
    Stepper
  }
};
</script>

<style scope lang="scss">
@import "@/assets/sass/base.scss";

.complete {
  .complete-head {
    .sale-logo {
      padding: 64px 390px 0px;

      @include desktop-md {
        padding: 43px 266px 0px;
      }
      @include tablet {
        padding: 43px 199px 0px;
      }
      @include ipad {
        display: none;
      }

      img {
        width: 306px;
        height: 44px;

        @include tablet {
          width: 250px;
          height: 34px;
        }
      }
    }
    .title {
      padding-top: 42px;

      @include desktop-md {
        padding-top: 15px;
      }
      @include ipad {
        padding-top: 46px;
      }

      h1 {
        margin-bottom: 9px;

        @include ipad {
          margin-bottom: 29px;
        }
      }
      h2 {
        font-size: $font-md-2;
        margin: 0px;

        @include ipad {
          color: #6b3fb8;
          font-weight: 800;
        }
      }
    }
  }
  .complete-body {
    .complete-body-robot {
      position: absolute;
      top: 136px;
      left: 113px;

      @include desktop-md {
        top: 70px;
        left: 25px;
      }
      @include tablet {
        top: 126px;
      }
      @include ipad {
        top: 169px;
        left: 50%;
        transform: translate(-50%, 0);
      }

      img {
        width: 201px;
        height: 297px;

        @include ipad {
          width: 132px;
          height: auto;
        }
      }
    }
    .complete-body-tick {
      text-align: center;
      padding-top: 30px;

      @include tablet {
        padding-top: 66px;
      }
      @include ipad {
        padding-top: 251px;
      }

      span {
        display: inline-block;
        width: 112px;
        height: 112px;
        padding: 34px 20px;
        border-radius: 50%;
        background-color: $blue-primary;

        @include ipad {
          width: 72px;
          height: 72px;
          padding: 22px 14px;
        }

        img {
          width: 75px;
          height: 56px;

          @include ipad {
            width: 45px;
            height: auto;
          }
        }
      }
    }
    .complete-body-desc {
      text-align: center;

      p {
        color: $blue-primary;
        font-family: Avenir;
        font-size: $font-md-2;
        font-weight: 800;
        text-transform: uppercase;
        margin: 38px 0px;

        @include tablet {
          margin: 120px 0px 30px;
        }
        @include ipad {
          font-size: 15px;
          margin: 30px 0px 28px;
        }
      }
    }
  }
  .complete-foot {
    text-align: center;

    button {
      width: 224px;
      height: 67px;
      font-size: $font-lg-2;
      text-transform: uppercase;

      @include ipad {
        width: 152px;
        height: 46px;
        font-size: 19px;
        font-weight: 900;
      }
    }
  }
}
</style>