<template>
  <div class="wizard-page-container calendar">
    <div class="wizard-page-head calendar-head">
      <div class="stepper-container">
        <div class="to-back">
          <router-link to="/addfacebook">
            <span class="to-back-icon">
              <img src="@/assets/images/back-icon.png" alt="to-back-icon">
            </span>
          </router-link>
          <span class="to-back-label">Back</span>
        </div>
        <div class="stepper">
          <div class="stepper-wrapper">
            <span class="circle">1</span>
            <span class="hypen"></span>
            <span class="circle">2</span>
            <span class="hypen"></span>
            <span class="circle">3</span>
          </div>
        </div>
      </div>
      <div class="title">
        <h1>Welcome Onboard!</h1>
        <h2>you’re 3 steps from setting up your workspace</h2>
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
          <button class="btn-connect">
            <span v-if="connected">Connected</span>
            <span v-else>Connect</span>
          </button>
        </div>
      </div>
      <div v-if="connected" class="calendar-connected">
        <div class="calendar-body-bottom">
          <div class="user-icon">
            <img src="@/assets/images/user_icon_red.png" alt="user-icon-red">
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
      <button v-on:click="continueNext()">CONTINUE</button>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    name: 'AddGoogleCalendar',
    data() {
      return {
        connected: false
      }
    },
    methods: {
      continueNext() {
        if (this.connected) {
          this.$router.push('/addappointment');
        }
        else {
          this.connected = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/sass/base.scss";

  .calendar {    
    .calendar-head {
      .title {
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
          font-size: 33px;
          margin-top: 22px;
          margin-bottom: 65px;
        }
      }
      .calendar-body-middle {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        .calendar-body-mark {
          img {
            width: 86px;
          }
        }
        .calendar-body-connect {
          padding-left: 27px;

          button {
            width: 291px;
            height: 86px;
            border-radius: 6px;
            background-color: $blue-primary;
            color: $white;
            font-family: Avenir-Black;
            font-size: 39px;
            letter-spacing: 1.4px;
            line-height: 42px;
          }
        }
      }
      .calendar-preconnect {
        .calendar-body-bottom {
          p  {
            color: $red-light;
            font-size: 30px;
            padding: 59px 213px 72px 213px;
            margin: 0px;
            text-align: center;
          }
        }
      }
      .calendar-connected {
        .calendar-body-bottom {
          display: flex;
          justify-content: center;
          margin-top: 38px;

          .user-icon {
            img {
              width: 66px;
              height: 60px;
            }
          }
          .user-desc {
            margin-left: 17px;

            h4 {
              margin: 0px;
              color: $red-light;
              font-family: Avenir-Black;
              font-size: 32px;
            }
            a {
              text-decoration: none;
              color: $red-light;
              font-size: 22px;
              font-weight: 400;
            }
          }
        }
      }
    }
    .calendar-foot {
      text-align: right;
      position: absolute;
      right: 64px;
      bottom: 24px;

      button {
        width: 233px;
        height: 70px;
        border-radius: 6px;
        background-color: $blue-primary;
        color: $white;
        font-family: Avenir-Black;
        font-size: 31px;
        letter-spacing: 1.12px;
        line-height: 33px;
        text-transform: uppercase;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>