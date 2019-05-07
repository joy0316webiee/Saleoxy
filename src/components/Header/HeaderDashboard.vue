<template>
  <div class="header">
    <div class="header-nav" @click="sidebarToggle">
      <img :class="{active: sidebarActive}" src="@/assets/images/ic_menu.png" alt="menu">
    </div>
    <div class="header-brand">
      <div class="header-brand-logo">
        <img src="@/assets/images/saleoxy_logo.png" alt="logo">
      </div>
      <div class="header-brand-datetime">
        <span class="time">
          14 : 20
          <cite>pm</cite>
        </span>
        <span class="date">Monday , Apr 9, 2019</span>
      </div>
    </div>
    <div class="header-menu">
      <div class="account-name">
        <span>John S .</span>
      </div>
      <div class="account-photo">
        <img src="@/assets/images/avatar.png" alt="img-photo">
      </div>
      <div class="dropdown" v-click-outside="hide">
        <div class="dropdown-toggle" @click="toggle()">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <div class="dropdown-menu" v-show="opened">
          <div class="dropdown-menu-setting">
            <span>Setting</span>
          </div>
          <div class="dropdown-menu-logout">
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "HeaderDashboard",
  props: {
    sidebarActive: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = true;
    },
    hide() {
      this.opened = false;
    },
    sidebarToggle() {
      this.$parent.sidebarToggle();
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.header {
  background-image: linear-gradient(
    to right,
    #673ab7 0%,
    #6f44ba 17%,
    #8560c2 47%,
    #a98dd1 85%,
    #b8a1d7 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101px;
  padding-left: 33px;
  padding-right: 24px;

  @include ipad {
    height: 67px;
    padding-left: 14px;
    padding-right: 20px;
  }

  .header-nav {
    display: none;

    @include desktop-md {
      display: inherit;
      flex: 1;
    }
    &:hover {
      cursor: pointer;
    }

    img {
      width: 35px;
      height: 25px;

      @include ipad {
        width: 30px;
        height: 18px;

        &.active {
          display: block;
          background: url("~@/assets/images/ic_back_blue.png") no-repeat;
          background-size: contain;
          padding-left: 30px;
        }
      }
    }
  }

  .header-brand {
    width: 518px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include desktop-md {
      flex-direction: column;
      flex: 1;
    }
    @include ipad {
      flex: 5;
    }

    .header-brand-logo {
      &:hover {
        cursor: pointer;
      }

      img {
        height: 32px;

        @include tablet {
          height: 27px;
        }
        @include ipad {
          height: 18px;
        }
      }
    }
    .header-brand-datetime {
      color: #ffffff;
      font-family: Avenir-Black;
      font-weight: 900;
      letter-spacing: 0.01px;
      display: flex;
      flex-direction: column;

      @include desktop-md {
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
      }

      .time {
        font-size: 27px;

        @include desktop-md {
          font-size: 17px;
        }
        @include tablet {
          font-size: 13px;
        }
        @include ipad {
          font-size: 15px;
        }

        cite {
          font-size: 17px;
          font-style: inherit;

          @include tablet {
            font-size: 13px;
          }
          @include ipad {
            font-size: 11px;
          }
        }
      }
      .date {
        font-size: 17px;

        @include desktop-md {
          margin-left: 14px;
        }
        @include tablet {
          margin-left: 9px;
          font-size: 13px;
        }
        @include ipad {
          font-size: 15px;
        }
      }
    }
  }
  .header-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include desktop-md {
      flex: 1;
    }

    .account-name {
      span {
        color: #ffffff;
        font-family: Avenir-Medium;
        font-size: 21px;
        font-weight: 500;
      }

      @include ipad {
        display: none;
      }
    }
    .account-photo {
      margin-left: 20px;

      img {
        width: 47px;
        height: 50px;

        @include ipad {
          width: 28px;
          height: 29px;
        }
      }
    }
    .dropdown {
      margin-left: 31px;
      position: relative;

      @include ipad {
        margin-left: 2px;
      }

      .dropdown-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 26px;

        @include ipad {
          height: 15px;
        }

        &:hover {
          cursor: pointer;

          .circle {
            background-color: darken(white, 10);
          }
        }

        .circle {
          display: inline-block;
          width: 7px;
          height: 7px;
          padding: 3px;
          background-color: white;
          border-radius: 50%;

          @include ipad {
            width: 4px;
            height: 4px;
            padding: 2px;
          }
        }
      }
      .dropdown-menu {
        width: 81px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        background-color: #ffffff;
        position: absolute;
        top: 40px;
        right: 0px;
        z-index: 2;

        @include ipad {
          top: 20px;
          width: 49px;
        }

        .dropdown-menu-setting {
          height: 27px;
          text-align: center;
          border-radius: 4px 4px 0 0;
          background-color: #ff9201;

          @include ipad {
            height: 17px;
          }

          &:hover {
            cursor: pointer;
            background-color: darken(#ff9201, 5%);
          }

          span {
            color: #ffffff;
            font-family: Avenir;
            font-size: 17px;
            font-weight: 400;

            @include ipad {
              font-size: 9px;
            }
          }
        }
        .dropdown-menu-logout {
          height: 28px;
          text-align: center;

          @include ipad {
            height: 18px;
          }

          &:hover {
            cursor: pointer;
            background-color: darken(white, 5%);
          }

          span {
            color: #ff9201;
            font-family: Avenir;
            font-size: 17px;
            font-weight: 400;

            @include ipad {
              font-size: 9px;
            }
          }
        }
      }
    }
  }
}
</style>