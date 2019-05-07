<template>
  <div class="page-container login">
    <div class="login-desc">
      <img class="img-logo-blue" src="@/assets/images/saleoxy_logo_blue.png" alt="logo-blue">
      <h1 class="desc-desk">Your 24/7 personal</h1>
      <h1 class="desc-mb">Your 24/7 personal assistant</h1>
      <img class="img-robot" src="@/assets/images/robot.png" alt="robot">
    </div>
    <div class="login-form">
      <div class="form-head">
        <h2>Hello!</h2>
      </div>
      <div class="form-body">
        <div class="form-body-top">
          <h3>Create Account</h3>
        </div>
        <div class="form-body-middle">
          <div class="form-text">
            <label>Username</label>
            <input type="text">
          </div>
          <div class="form-text">
            <label>Password</label>
            <input type="text">
          </div>
          <div class="form-checkbox">
            <input type="checkbox">
            <label>Remember me</label>
          </div>
        </div>
        <div class="form-body-bottom">
          <router-link to="/addfacebook">
            <button class="btn-login">Login</button>
          </router-link>
          <button class="btn-with-google">
            <img src="@/assets/images/google_mark.svg" alt="google-mark-icon">
            <span>Login with google</span>
          </button>
          <a href="#">Forgot Password</a>
        </div>
      </div>
      <div class="form-foot">
        <p>Term of use, Privacy policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.login {
  width: 1124px;
  height: 648px;
  display: flex;
  background-image: linear-gradient(
    to right,
    #673ab7 0%,
    #6f44ba 17%,
    #8560c2 47%,
    #a98dd1 85%,
    #b8a1d7 100%
  );

  @include desktop-md {
    width: 850px;
    height: 552px;
  }
  @include tablet {
    width: 650px;
    margin-top: 100px;
    display: block;
    height: auto;
    position: relative;
    background-position: right bottom;
    background-size: 52% auto;
    background-image: url("~@/assets/images/desc_bg.png");
    background-repeat: no-repeat;
  }
  @include ipad {
    width: 399px;
    margin: 46px auto 0px;
  }
  @include iphone {
    width: 326px;
  }

  .login-desc {
    width: 663px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: $white;
    background-image: url("~@/assets/images/desc_bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: relative;

    @include tablet {
      position: initial;
      width: inherit;
      height: 100%;
      border-radius: 20px;
      text-align: center;
      background-image: none;
    }

    .img-logo-blue {
      width: 349px;
      height: 47px;
      margin: 39px 142px 0px 169px;

      @include desktop-md {
        width: 249px;
        height: 34px;
        margin: 38px 121px 0px 121px;
      }
      // @include desktop-sm {
      //   width: 210px;
      //   height: 29px;
      //   margin: 38px 80px 0px 80px;
      // }
      @include ipad {
        width: 197px;
        height: 28px;
        margin: 26px 0px 0px 0px;
      }
    }
    h1 {
      margin: 34px 148px 0px 179px;
      color: $red-light;
      font-family: Avenir;
      font-size: $font-lg-2;
      font-weight: 800;
      line-height: 33px;
      text-align: center;

      @include desktop-md {
        margin: 13px auto 0px;
      }
      @include ipad {
        font-size: 13px;
        font-weight: 800;
        line-height: 33px;
        margin: 17px auto 0px;
      }
    }
    .desc-desk {
      @include tablet {
        display: none;
      }
    }
    .desc-mb {
      display: none;

      @include tablet {
        display: inherit;
      }
    }
    .img-robot {
      position: absolute;
      width: 191px;
      height: 183px;
      right: -24px;
      bottom: 175px;

      @include desktop-md {
        width: 146px;
        height: 140px;
        right: -20px;
        bottom: 127px;
      }
      @include tablet {
        width: 98px;
        height: 94px;
        right: -12px;
        bottom: 90px;
      }
      @include ipad {
        width: 62px;
        height: 60px;
        right: -9px;
        bottom: 54px;
      }
      @include iphone {
        width: 50px;
        height: 48px;
        right: -9px;
        bottom: 45px;
      }
    }
  }
  .login-form {
    padding: 104px 80px 77px 64px;

    @include desktop-md {
      padding: 56px 40px 24px 40px;
    }
    @include tablet {
      padding: 22px 60px 194px 60px;
    }
    @include ipad {
      padding: 25px 50px 113px 50px;
    }

    .form-head {
      h2 {
        margin-top: 0px;
        margin-bottom: 22px;
        text-align: center;
        color: $white;
        font-size: $font-xl-1;

        @include desktop-md {
          margin-bottom: 8px;
        }
        @include tablet {
          display: none;
        }
      }
    }
    .form-body {
      background-color: $white;
      border-top: 13px solid $pink-light;
      border-bottom: 13px solid $pink-light;
      border-left: 9px solid $pink-light;
      border-right: 9px solid $pink-light;
      padding: 14px 29px 11px 23px;

      @include tablet {
        padding: 14px 44px 11px 48px;
      }
      @include ipad {
        padding: 12px 18px 13px 18px;
        border-top: 10px solid #a588d0;
        border-bottom: 10px solid #a588d0;
        border-left: 7px solid #a588d0;
        border-right: 7px solid #a588d0;
      }

      .form-body-top {
        h3 {
          margin: 0px;
          padding: 0px 43px;
          color: $blue-dark;
          font-family: Avenir-Black;
          font-size: $font-md-1;

          @include desktop-md {
            padding: 0px 26px;
          }
          @include tablet {
            font-size: 25px;
            line-height: 39px;
            text-align: center;
          }
          @include ipad {
            font-size: 17px;
            padding: 0px;
            text-align: center;
          }
        }
      }
      .form-body-middle {
        .form-text {
          padding-top: 32px;

          @include desktop-md {
            padding-top: 15px;
          }
          // @include desktop-sm {
          //   padding-top: 4px;
          // }
          @include ipad {
            padding-top: 28px;
          }

          label {
            color: $grey-light;
            font-family: Avenir-Roman;
            font-size: $font-xs-3;

            @include ipad {
              font-size: 12px;
            }
          }
          input {
            display: block;
            width: 93%;
            height: 31px;
            border: none;
            border-bottom: 1px solid $grey-light;
            font-size: $font-xs-3;

            @include ipad {
              height: 29px;
            }
          }
        }
        .form-checkbox {
          display: flex;
          align-items: center;
          padding: 7px 0px 27px 0px;

          // @include desktop-sm {
          //   padding: 3px 0px 9px 0px;
          // }
          @include ipad {
            padding: 3px 0px 27px 0px;
          }

          label {
            margin-top: 4px;
            color: $blue-dark;
            font-family: Avenir-Medium;
            font-size: $font-xxs;
          }
        }
      }
      .form-body-bottom {
        text-align: center;

        @mixin button {
          display: block;
          margin: 4px auto;
          width: 207px;
          height: 41px;
          border-radius: 6px;
          background-image: linear-gradient(
            to right,
            #150d9c 0%,
            #1e13a5 21%,
            #3823bf 56%,
            #613ee8 100%,
            #623fe9 100%
          );
          color: #ffffff;
          font-family: Avenir-Black;
          font-size: $font-xs-3;

          &:hover {
            cursor: pointer;
          }

          @include tablet {
            width: 341px;
            height: 49px;
          }
          @include ipad {
            width: 175px;
            height: 35px;
            font-size: 12px;
          }
          @content;
        }
        .btn-login {
          @include button;
          @include ipad {
            margin: 4px auto;
          }
        }
        .btn-with-google {
          @include button {
            font-family: Avenir-Medium;
            display: flex;
            align-items: center;
            margin: 7px auto 13px;
          }
          @include tablet {
            padding: 0px 64px;
          }
          @include ipad {
            padding: 1px 7px 2px;
            margin-top: 6px;
            margin-bottom: 12px;
          }

          img {
            background: $white;
            padding: 5px;
            margin-left: -4px;
            margin-right: 12px;
            border-radius: 5px;

            @include ipad {
              padding: 3px;
            }
          }
        }
        a {
          text-decoration: none;
          color: $blue-dark;
          font-family: Avenir-Medium;
          font-size: $font-xs-1;

          @include ipad {
            font-size: 7px;
          }
        }
      }
    }
    .form-foot {
      text-align: center;
      color: $white;
      font-family: Avenir-Heavy;
      font-size: $font-xxs;
      padding: 0px;

      p {
        margin: 33px 0px 0px 0px;

        @include desktop-md {
          margin-top: 26px;
        }
        @include tablet {
          color: #6b3fb8;
        }
        @include ipad {
          font-size: 7px;
          margin-top: 12px;
          margin-bottom: 13px;
        }
      }
    }
  }
}
</style>