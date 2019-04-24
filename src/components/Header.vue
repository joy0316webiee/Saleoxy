<template>
  <div class="header">
    <div class="header-logo">
      <img class="img-logo" src="@/assets/images/saleoxy_logo.png" alt="logo">
    </div>
    <div class="header-login">
      <img class="img-user" src="@/assets/images/user_icon.svg" alt="usericon">
      <span>Login</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.header {
  padding: 32px 33px;
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

  .header-logo {
    .img-logo {
      height: 36px;

      &:hover {
        cursor: pointer;
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
      font-size: 25px;
      font-weight: 800;
      padding-top: 4px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>