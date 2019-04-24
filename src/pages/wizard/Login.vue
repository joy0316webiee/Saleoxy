<template>
  <div class="wizard-page-container login">
    <div class="login-desc">
      <img class="img-logo-blue" src="@/assets/images/saleoxy_logo_blue.png" alt="logo-blue">
      <h1>Your 24/7 personal assistant</h1>
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
  background-image: linear-gradient(
    to right,
    #673ab7 0%,
    #6f44ba 17%,
    #8560c2 47%,
    #a98dd1 85%,
    #b8a1d7 100%
  );
  display: flex;

  .login-desc {
    background-size: cover;
    width: 757px;
    background-color: $white;
    background-image: url("~@/assets/images/desc_bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: relative;

    .img-logo-blue {
      width: 398px;
      margin: 44px 161px 0px 197px;
    }
    h1 {
      margin: 39px 169px 0px 204px;
      color: $red-light;
      font-family: Avenir;
      font-size: 28px;
      font-weight: 800;
      line-height: 33px;
    }
    .img-robot {
      width: 217px;
      height: 209px;
      position: absolute;
      right: -25px;
      bottom: 201px;
    }
  }
  .login-form {
    padding: 118px 92px 22px 78px;

    .form-head {
      h2 {
        margin-top: 0px;
        text-align: center;
        color: $white;
        font-size: 31px;
      }
    }
    .form-body {
      background-color: $white;
      border-top: 13px solid $pink-light;
      border-bottom: 13px solid $pink-light;
      border-left: 9px solid $pink-light;
      border-right: 9px solid $pink-light;
      padding: 16px 24px 10px 24px;

      .form-body-top {
        h3 {
          margin: 0px;
          padding: 0px 43px;
          color: $blue-dark;
          font-family: Avenir-Black;
          font-size: 25px;
        }
      }
      .form-body-middle {
        .form-text {
          padding-top: 35px;

          label {
            color: $grey-light;
            font-family: Avenir-Roman;
            font-size: 20px;
          }
          input {
            display: block;
            width: 91%;
            height: 33px;
            margin: 0 auto;
            border: none;
            border-bottom: 1px solid $grey-light;
            font-size: 20px;
          }
        }
        .form-checkbox {
          display: flex;
          align-items: center;
          padding: 9px 10px 33px 10px;

          label {
            margin-top: 4px;
            color: $blue-dark;
            font-family: Avenir-Medium;
            font-size: 15px;
          }
        }
      }
      .form-body-bottom {
        text-align: center;

        @mixin button {
          display: block;
          margin: 4px auto;
          width: 236px;
          height: 47px;
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
          font-size: 20px;

          &:hover {
            cursor: pointer;
          }
          @content;
        }
        .btn-login {
          @include button;
        }
        .btn-with-google {
          @include button {
            font-family: Avenir-Medium;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          img {
            background: $white;
            padding: 5px;
            margin-right: 14px;
            border-radius: 5px;
          }
        }
        a {
          text-decoration: none;
          color: $blue-dark;
          font-family: Avenir-Medium;
          font-size: 15px;
        }
      }
    }
    .form-foot {
      text-align: center;
      color: $white;
      font-family: Avenir-Heavy;
      font-size: 14px;
      padding-top: 46px;

      p {
        margin: 0px;
      }
    }
  }
}
</style>