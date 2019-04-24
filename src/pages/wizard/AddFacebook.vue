<template>
  <div class="wizard-page-container facebook">
    <div class="wizard-page-head facebook-head">
      <div class="stepper">
        <div class="stepper-wrapper">
          <span class="circle">1</span>
          <span class="hypen"></span>
          <span class="circle">2</span>
          <span class="hypen"></span>
          <span class="circle">3</span>
        </div>
      </div>
      <div class="title">
        <h1>Welcome Onboard!</h1>
        <h2>you’re 3 steps from setting up your workspace</h2>
      </div>
    </div>
    <div class="facebook-body">
      <div class="facebook-mark-lg">
        <img src="@/assets/images/facebook_mark.png" alt="facebook-mark-lg">
      </div>
      <div class="facebook-body-desc">
        <h3>Communicate with Facebook users via Saleoxy</h3>
        <p>
          Connect your company’s Facebook page to Open Channels
          and communicate with Facebook users via Saleoxy.
        </p>
      </div>
    </div>
    <div class="facebook-foot">
      <div v-if="connected" class="facebook-connected">
        <div class="facebook-foot-top">
          <div class="facebook-disconnect">
            <img src="@/assets/images/user.png" alt="user">
            <div class="desc">
              <h3>John Smith</h3>
              <span>Disconnect</span>
            </div>
          </div>
          <div class="facebook-offical">
            <img src="@/assets/images/flag.png" alt="flag">
            <div class="desc">
              <h3>Best Doctor offical page</h3>
              <span>Edit</span>
            </div>
          </div>
        </div>
        <div class="facebook-foot-bottom">
          <div class="facebook-greetings">
            <h4>Greetings message</h4>
            <textarea
              placeholder="EXAMPLE : Hello! Thank you for contacting us. 
              Skin treatment has always been much more, than just a job for us, it is a chance to change someone’s life"
            ></textarea>
            <p>Reminder: We always ask for name, phone and email so you don’t need to ask for those.</p>
          </div>
          <div class="btn-continue">
            <router-link to="/addcalendar">
              <button>continue</button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else class="facebook-onboard">
        <div class="facebook-foot-top">
          <p>- automatic incoming message distribution according to queue rules</p>
          <p>- familiar Saleoxy chat interface</p>
          <p>- all conversations are saved to CRM history</p>
        </div>
        <div class="facebook-foot-middle">
          <p>Please authorize with the Facebook account that manages your pages to receive messages from your Saleoxy clients.</p>
        </div>
        <div class="facebook-foot-bottom">
          <div class="bottom-desc">
            <p>You need to create your company Facebook page or use an existing one.</p>
            <p>You have to be an administrator of that page.</p>
          </div>
          <div class="bottom-button">
            <div class="facebook-mark-sm">
              <img src="@/assets/images/facebook_mark.png" alt="facebook-mark-sm">
            </div>
            <div class="btn-connect">
              <button v-on:click="connectFacebook()">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddFacebook",
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
  .facebook-body {
    display: flex;
    padding: 0px 335px 0px 36px;

    .facebook-mark-lg {
      img {
        width: 122px;
        height: 122px;
      }
    }
    .facebook-body-desc {
      padding-left: 32px;

      h3 {
        color: $blue-primary;
        font-family: Avenir-Black;
        font-size: 33px;
        margin: 0px;
        line-height: 45px;
      }
      p {
        color: $black-primary;
        font-size: 26px;
        line-height: 37px;
        margin: 0px;
        padding: 6px 32px 0px 0px;
      }
    }
  }
  .facebook-foot {
    .facebook-connected {
      .facebook-foot-top {
        display: flex;
        padding: 36px 0px 39px 190px;

        .facebook-disconnect {
          width: 365px;
          display: flex;
        }
        .facebook-offical {
          display: flex;
        }

        img {
          width: 68px;
          height: 68px;
        }
        .desc {
          padding: 2px 0px 0px 16px;

          h3 {
            margin: 0px;
            color: $blue-primary;
            font-family: Avenir-Heavy;
            font-size: 32px;
          }
          span {
            color: $blue-primary;
            font-size: 22px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
      .facebook-foot-bottom {
        display: flex;
        padding-left: 190px;

        .facebook-greetings {
          h4 {
            margin: 0px 0px 18px;
            color: $blue-primary;
            font-family: Avenir;
            font-size: 21px;
          }
          textarea {
            width: 518px;
            height: 103px;
            padding: 9px 13px 11px;
            border: none;
            border-radius: 4px;
            background-color: $white-darken;
            resize: none;
            color: $grey-dark;
            font-family: Avenir-Medium;
            font-size: 16px;
            line-height: 23px;
          }
          p {
            color: $pink-primary;
            font-family: Avenir-Heavy;
            font-size: 15px;
            width: 387px;
            margin: 0px;
            padding-top: 11px;
          }
        }
        .btn-continue {
          padding: 133px 0px 0px 231px;

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
          }
        }
      }
    }
    .facebook-onboard {
      .facebook-foot-top {
        padding: 23px 0px 40px 224px;

        p {
          font-size: 23px;
          line-height: 31px;
          margin: 0px;
        }
      }
      .facebook-foot-middle {
        p {
          font-size: 21px;
          line-height: 38px;
          margin: 0px;
          padding-left: 90px;
        }
      }
      .facebook-foot-bottom {
        display: flex;
        padding-left: 90px;
        padding-top: 44px;

        .bottom-desc {
          padding-right: 50px;

          p {
            font-size: 21px;
            line-height: 34px;
            margin: 0px;
          }
        }
        .bottom-button {
          display: flex;
          padding-left: 20px;

          .facebook-mark-sm {
            img {
              width: 86px;
              height: 86px;
            }
          }
          .btn-connect {
            button {
              width: 291px;
              height: 86px;
              border-radius: 6px;
              background-color: $blue-primary;
              color: $white;
              font-family: Avenir-Black;
              font-size: 39px;
              font-weight: 900;
              letter-spacing: 1.4px;
              line-height: 42px;
              margin-left: 12px;

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>