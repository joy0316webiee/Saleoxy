<template>
  <div class="account">
    <div class="account-setting">
      <div class="account-setting-title title">
        <img src="@/assets/images/ic_user_blue.png" alt="user-icon">
        <label>Account setting</label>
      </div>
      <div class="account-setting-body">
        <div class="account-setting-controls">
          <div class="account-setting-group">
            <div class="business-name">
              <label class="subtitle">Business name</label>
              <input type="text" placeholder="John smith">
            </div>
            <div class="birthday secondary">
              <label class="subtitle">Date of birth</label>
              <input type="text" placeholder="mm/dd/yyyy">
            </div>
          </div>
          <div class="account-setting-group">
            <div class="email">
              <label class="subtitle">Email</label>
              <input type="email" placeholder="John.smith@gmail.com">
            </div>
            <div class="password secondary">
              <label class="subtitle">Password</label>
              <input type="password">
            </div>
          </div>
        </div>
        <div class="btn-update">
          <button>Update</button>
        </div>
      </div>
    </div>
    <div class="account-integration">
      <div class="account-integration-title title">
        <img src="@/assets/images/ic_connect_blue.png" alt="icon-connect">
        <label>Integrations</label>
      </div>
      <div class="account-integration-body">
        <div class="facebook-page">
          <div class="facebook-page-title subtitle">
            <span>Facebook Pages</span>
          </div>
          <div class="facebook-page-body">
            <div class="facebook-page-body-image">
              <img src="@/assets/images/flag_blue.png" alt="flag-blue">
            </div>
            <div class="facebook-page-body-edit">
              <div class="title">
                <img src="@/assets/images/avatar.png" alt="avatar">
                <span>Best Doctor official page</span>
              </div>
              <div class="dropdown" v-click-outside="hide">
                <div class="dropdown-toggle" @click="toggle()">
                  <img class="img-edit" src="@/assets/images/ic_edit_blue.png" alt="edit-blue">
                </div>
                <div class="dropdown-menu" v-show="opened">
                  <div class="dropdown-menu-edit" @click="editFacebook()">
                    <span>Edit</span>
                  </div>
                  <div class="dropdown-menu-delete">
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="facebook-page-foot">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="account-timezone">
      <div class="account-timezone-title title">
        <img src="@/assets/images/ic_clock_blue.png" alt="clock-blue">
        <label>Time Zone</label>
      </div>
      <div class="account-timezone-select">
        <select>
          <option>(GMT-7:00) Pacific Time - Vancouver</option>
          <option>(GMT-7:00) Pacific Time - Whitehorse</option>
          <option>(GMT-8:00) Pitcairn</option>
          <option>(GMT-7:00) Mountain Time - Dawson Creek</option>
          <option>(GMT-6:00) Mountain Time - Edmonton</option>
          <option>(GMT-7:00) Mountain Time - Hermosillo</option>
          <option>(GMT-6:00) Mountain Time - Chihuahua, Mazatian</option>
          <option>(GMT-6:00) Mountain Time - Yellowknife</option>
          <option>(GMT-6:00) Belize</option>
          <option>(GMT-6:00) Costa Rica</option>
          <option>(GMT-6:00) El Salvador</option>
          <option>(GMT-6:00) Guatemala</option>
          <option>(GMT-6:00) Managua</option>
          <option>(GMT-5:00) Central Time - Mexico City</option>
          <option>(GMT-6:00) Central Time - Regina</option>
          <option>(GMT-6:00) Central Time - Tegucigalpa (no DST)</option>
          <option>(GMT-5:00) Central Time - Winnipeg</option>
          <option>(GMT-6:00) Easter Island</option>
          <option>(GMT-6:00) Galapagos</option>
          <option>(GMT-5:00) Bogota</option>
          <option>(GMT-5:00) Cayman</option>
          <option>(GMT-4:00) Grand Turk</option>
          <option>(GMT-5:00) Guayaquil</option>
          <option>(GMT-4:00) Havana</option>
          <option>(GMT-4:00) Eastern Time - Iqaluit</option>
          <option>(GMT-5:00) Jamaica</option>
          <option>(GMT-5:00) Lima</option>
          <option>(GMT-5:00) Cancun - Eastern Time - Quintana Ropo</option>
          <option>(GMT-4:00) Nassau</option>
          <option>(GMT-5:00) Panama</option>
          <option>(GMT-4:00) Port-au-Prince</option>
          <option>(GMT-4:00) Eastern Time - Toronto</option>
          <option>(GMT-4:00) Caracas</option>
          <option>(GMT-4:00) Anguilla</option>
          <option>(GMT-4:00) Antigua</option>
          <option>(GMT-4:00) Aruba</option>
          <option>(GMT-4:00) Asuncion</option>
          <option>(GMT-4:00) Barbados</option>
          <option>(GMT-4:00) Boa Vista</option>
          <option>(GMT-4:00) Campo Grande</option>
          <option>(GMT-4:00) Cuiaba</option>
          <option>(GMT-4:00) Curacao</option>
          <option>(GMT-4:00) Dominica</option>
          <option>(GMT-4:00) Grenada</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import router from "@/router";

export default {
  name: "SettingAccount",
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
    editFacebook() {
      this.$router.push("/setfacebook");
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#707070);

.account {
  margin: 32px 59px 32px 41px;
  padding: 38px 60px 0px 27px;
  height: 916px;
  box-shadow: 0 15px 13px rgba(0, 0, 0, 0.04);
  border: 6px solid #9b7bcb;
  background-color: #ffffff;

  @include ipad {
    margin: 43px 8px 12px 7px;
    padding: 12px 21px 0px 23px;
    height: 692px;
    border: 2px solid #9b7bcb;
    position: relative;
  }

  > div {
    > div.title {
      display: flex;
      align-items: center;

      &.account-setting-title {
        @include ipad {
          align-items: center;
          position: absolute;
          left: 0px;
          top: 0px;
          transform: translate(0, -100%);
          padding-bottom: 7px;
          padding-left: 8px;
        }
      }

      img {
        width: 27px;
        height: 25px;

        @include ipad {
          width: 22px;
          height: 20px;
        }
      }
      label {
        color: #6b3fb8;
        font-family: Avenir-heavy;
        font-size: 26px;
        font-weight: 800;
        margin-left: 17px;

        @include ipad {
          font-size: 14px;
          margin-left: 13px;
          margin-top: 2px;
        }
      }
    }
    .subtitle {
      color: #164bcd;
      font-family: Avenir-heavy;
      font-size: 21px;
      font-weight: 800;

      @include ipad {
        font-size: 17px;
        margin-bottom: 5px;
      }
    }

    &.account-setting {
      .account-setting-body {
        margin-top: 9px;
        display: flex;

        @include tablet {
          flex-direction: column;
        }
        @include ipad {
          margin-top: 0px;
        }

        .account-setting-controls {
          flex: auto;

          .account-setting-group {
            display: flex;
            align-items: center;
            margin-top: 19px;

            @include ipad {
              flex-direction: column;
              margin-top: 0px;
              align-items: normal;
            }

            > div {
              display: flex;
              flex-direction: column;
              flex: 1;

              @include ipad {
                margin-bottom: 13px;
              }

              input {
                height: 56px;
                border-radius: 4px;
                background-color: #e9eefe;
                color: #707070;
                font-family: Avenir-medium;
                font-size: 18px;
                font-weight: 500;
                padding: 17px 12px 14px;
                border: none;

                @include ipad {
                  font-size: 16px;
                  height: 54px;
                }
              }
              &.secondary {
                margin-left: 100px;
                flex: 0.89;

                @include ipad {
                  margin-left: 0px;
                }
              }
            }
          }
        }
        .btn-update {
          margin-left: 13px;
          align-self: flex-end;

          @include tablet {
            margin-top: 15px;
          }
          @include ipad {
            margin-top: 0px;
          }

          button {
            width: 141px;
            height: 56px;
            border-radius: 4px;
            background-color: #6b3fb8;
            color: #ffffff;
            font-family: Avenir-black;
            font-size: 20px;
            font-weight: 900;

            @include ipad {
              width: 92px;
              height: 36px;
              font-size: 11px;
            }
          }
        }
      }
    }
    &.account-integration {
      margin-top: 100px;

      @include ipad {
        margin-top: 18px;
      }

      .account-integration-body {
        margin-top: 28px;

        @include ipad {
          margin-top: 26px;
        }

        .facebook-page {
          .facebook-page-body {
            margin-top: 14px;
            display: flex;
            align-items: center;

            @include ipad {
              margin-top: 12px;
            }

            .facebook-page-body-image {
              img {
                width: 47px;
                height: 47px;

                @include ipad {
                  width: 32px;
                  height: 32px;
                }
              }
            }
            .facebook-page-body-edit {
              width: 76%;
              height: 64px;
              border-radius: 4px;
              background-color: #e9eefe;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: 24px;
              padding: 15px 18px 15px 23px;

              @include ipad {
                height: 52px;
                margin-left: 19px;
                padding: 12px 10px 12px 6px;
                width: 100%;
              }

              .title {
                display: flex;
                align-items: center;

                img {
                  width: 32px;
                  height: 34px;

                  @include ipad {
                    width: 27px;
                    height: 28px;
                  }
                }
                span {
                  margin-left: 12px;
                  margin-top: 8px;
                  color: #164bcd;
                  font-family: Avenir-heavy;
                  font-size: 15px;
                  font-weight: 800;

                  @include ipad {
                    font-size: 11px;
                    margin-left: 9px;
                  }
                }
              }
              .dropdown {
                position: relative;

                .dropdown-toggle {
                  img {
                    width: 19px;
                    height: 18px;
                  }
                  &:hover {
                    cursor: pointer;
                  }
                }
                .dropdown-menu {
                  position: absolute;
                  right: 0px;
                  top: 100%;
                  width: 81px;
                  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
                  border-radius: 4px;
                  background-color: #ffffff;
                  text-align: center;

                  @include ipad {
                    width: 44px;
                  }

                  .dropdown-menu-edit {
                    height: 27px;
                    border-radius: 4px 4px 0 0;
                    background-color: #ff9201;

                    @include ipad {
                      height: 19px;
                    }

                    span {
                      color: #ffffff;
                      font-family: Avenir;
                      font-size: 17px;
                      font-weight: 400;

                      @include ipad {
                        font-size: 8px;
                      }
                    }
                    &:hover {
                      cursor: pointer;
                      background-color: darken(#ff9201, 5%);
                    }
                  }
                  .dropdown-menu-delete {
                    height: 28px;

                    @include ipad {
                      height: 20px;
                    }

                    span {
                      color: #ff9201;
                      font-family: Avenir;
                      font-size: 17px;
                      font-weight: 400;

                      @include ipad {
                        font-size: 8px;
                      }
                    }

                    &:hover {
                      cursor: pointer;
                      background-color: darken(#ffffff, 5%);
                    }
                  }
                }
              }
            }
          }
          .facebook-page-foot {
            margin-top: 16px;
            margin-left: 89px;

            @include ipad {
              margin-top: 10px;
              margin-left: 50px;
            }

            span {
              width: 27px;
              height: 27px;
              border-radius: 17px;
              border: 2px solid #ff9201;
              display: inline-block;
              color: #ff9201;
              font-family: Avenir-black;
              font-size: 16px;
              font-weight: 900;
              line-height: 7px;
              padding: 9px 6px;

              @include ipad {
                width: 22px;
                height: 22px;
                padding: 6px 4px;
                font-size: 14px;
              }

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    &.account-timezone {
      margin-top: 30px;

      @include ipad {
        display: none;
      }

      .account-timezone-select {
        overflow: hidden;
        background: #ffffff url("~@/assets/images/arr_down_yellow.png")
          no-repeat 97% 50%;
        background-size: 22px 12px;
        width: 367px;
        height: 55px;
        margin-top: 28px;
        border-radius: 4px;
        background-color: #e9eefe;

        select {
          padding: 16px 36px 14px 12px;
          width: 100%;
          border: none;
          box-shadow: none;
          background: transparent;
          background-image: none;
          -webkit-appearance: none;
          font-family: Avenir-medium;
          font-size: 18px;
          font-weight: 500;
          color: #707070;
        }
      }
    }
  }
}
</style>



          