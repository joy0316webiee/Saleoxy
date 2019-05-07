<template>
  <div class="header">
    <div class="header-logo">
      <img class="img-logo" src="@/assets/images/saleoxy_logo.png" alt="logo">
    </div>
    <div class="header-login">
      <img class="img-user" src="@/assets/images/ic_user.svg" alt="usericon">
      <span>Login</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWizard"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.header {
  padding: 32px 50px 32px 33px;
  background-image: linear-gradient(
    to right,
    #673ab7 0%,
    #6f44ba 17%,
    #8560c2 47%,
    #a98dd1 85%,
    #b8a1d7 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include desktop-md {
    padding: 29px 50px 29px 33px;
  }
  @include tablet {
    padding: 17px 50px 17px 33px;
  }
  @include ipad {
    padding: 18px 20px 12px 23px;
  }

  .header-logo {
    .img-logo {
      height: 36px;

      &:hover {
        cursor: pointer;
      }

      @include desktop-md {
        height: 34px;
      }
      @include ipad {
        height: 24px;
      }
    }
  }
  .header-login {
    display: flex;

    img {
      padding: 6px 8px 9px 8px;
    }
    span {
      color: $white;
      font-family: Avenir-Heavy;
      font-size: $font-md-3;
      font-weight: 800;
      padding-top: 4px;

      &:hover {
        cursor: pointer;
      }

      @include ipad {
        display: none;
      }
    }
  }
}
</style>