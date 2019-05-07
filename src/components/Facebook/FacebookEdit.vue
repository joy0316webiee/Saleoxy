<template>
  <div class="facebook-edit" :class="{update : forUpdate}">
    <div class="facebook-edit-top">
      <div class="facebook-disconnect">
        <img src="@/assets/images/profile.png" alt="user">
        <div class="desc">
          <h3>John Smith</h3>
          <span>Disconnect</span>
        </div>
      </div>
      <div class="facebook-offical">
        <img src="@/assets/images/flag_blue.png" alt="flag">
        <div class="desc">
          <h3>Best Doctor offical page</h3>
          <span>Edit</span>
        </div>
      </div>
    </div>
    <div class="facebook-edit-bottom">
      <div class="facebook-greetings">
        <h4>Greetings message</h4>
        <textarea
          placeholder="EXAMPLE : Hello! Thank you for contacting us. Skin treatment has always been much more, than just a job for us, it is a chance to change someone’s life"
        ></textarea>
        <p>Reminder: We always ask for name, phone and email so you don’t need to ask for those.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacebookEdit",
  props: {
    forUpdate: {
      required: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.facebook-edit {
  .facebook-edit-top {
    display: flex;
    padding: 34px 0px 32px 198px;

    @include desktop-md {
      padding: 15px 0px 15px 141px;
    }
    @include tablet {
      padding: 29px 0px 15px 69px;
    }
    @include ipad {
      padding: 71px 0px 0px 81px;
      display: flex;
      flex-direction: column;
    }
    @include iphone {
      padding: 82px 0px 0px 32px;
    }

    .facebook-disconnect {
      width: 302px;
      display: flex;

      @include tablet {
        width: 226px;
      }
    }
    .facebook-offical {
      display: flex;

      @include ipad {
        margin-top: 15px;
      }
    }

    img {
      width: 57px;
      height: 57px;

      @include ipad {
        width: 22px;
        height: 22px;
      }
    }
    .desc {
      padding: 2px 0px 0px 13px;

      @include ipad {
        padding: 2px 0px 0px 30px;
      }

      h3 {
        margin: 0px;
        color: $blue-primary;
        font-family: Avenir-Heavy;
        font-size: $font-lg-1;
        line-height: 34px;

        @include tablet {
          font-size: 23px;
          line-height: 31px;
        }
        @include ipad {
          font-size: 17px;
          line-height: 20px;
        }
      }
      span {
        color: $blue-primary;
        font-size: $font-xs-3;
        line-height: 23px;

        @include ipad {
          font-size: 12px;
          line-height: 15px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .facebook-edit-bottom {
    display: flex;
    padding-left: 190px;

    @include tablet {
      padding-left: 74px;
      padding-top: 30px;
    }
    @include ipad {
      padding-left: 58px;
      padding-top: 12px;
    }
    @include iphone {
      padding-left: 23px;
    }

    .facebook-greetings {
      h4 {
        margin: 0px 0px 14px;
        color: $blue-primary;
        font-family: Avenir;
        font-size: $font-xs-3;

        @include ipad {
          color: #6b3fb8;
          font-size: 14px;
          margin-left: 11px;
          margin-bottom: 7px;
        }
      }
      textarea {
        width: 546px;
        height: 86px;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        background-color: $white-darken;
        resize: none;
        color: $grey-dark;
        font-family: Avenir-Medium;
        font-size: $font-xs-2;
        line-height: 23px;

        @include ipad {
          width: 286px;
          height: 107px;
          font-size: 13px;
          line-height: 17px;
          padding-bottom: 0px;
        }
      }
      p {
        color: $pink-primary;
        font-family: Avenir-Heavy;
        font-size: $font-xs-1;
        width: 387px;
        margin: 0px;
        padding-top: 13px;

        @include ipad {
          font-size: 11px;
          color: #fe5d89;
          margin-top: -7px;
          width: auto;
          padding-right: 36px;
        }
      }
    }
  }

  &.update {
    .facebook-edit-top {
      padding: 65px 0px 31px 0px;

      @include desktop-md-fa {
        padding: 24px 0px 23px 45px;
      }
      @include tablet {
        padding: 20px 0px 23px 18px;
      }
      @include ipad {
        padding: 93px 0px 20px 0px;
      }
      > div {
        img {
          width: 68px;
          height: 68px;

          @include ipad {
            width: 40px;
            height: 40px;
          }
        }
        .desc {
          padding: 9px 0px 0px 16px;

          h3 {
            font-size: 32px;
            font-weight: 800;

            @include desktop-md-fa {
              font-size: 25px;
            }
            @include tablet {
              font-size: 22px;
            }
            @include ipad {
              font-size: 16px;
            }
          }
          span {
            font-size: 22px;
            font-weight: 400;

            @include desktop-md-fa {
              font-size: 17px;
            }
            @include ipad {
              font-size: 10px;
            }
          }
        }
        &.facebook-disconnect {
          width: 367px;

          @include tablet {
            width: 220px;
          }
        }
      }
    }
    .facebook-edit-bottom {
      padding-left: 0px;

      @include desktop-md-fa {
        padding-left: 41px;
      }
      @include tablet {
        padding-left: 31px;
      }
      @include ipad {
        padding-left: 0px;
        padding-top: 0px;
      }

      .facebook-greetings {
        h4 {
          font-family: Avenir-heavy;
          font-size: 21px;
          font-weight: 800;
          margin: 0px 0px 18px;

          @include desktop-md-fa {
            font-size: 19px;
            margin: 0px 0px 9px;
          }
          @include ipad {
            font-size: 14px;
            margin: 0px 0px 4px;
          }
        }
        textarea {
          width: 518px;
          height: 103px;
          border-radius: 4px;
          background-color: #e9eefe;
          color: #707070;
          font-family: Avenir-medium;
          font-size: 16px;
          font-weight: 500;
          padding: 9px 13px 11px;

          @include ipad {
            width: 286px;
            height: 107px;
            font-size: 13px;
            padding: 9px 13px 10px 14px;
          }
        }
        p {
          color: #6b3fb8;
          font-family: Avenir-heavy;
          font-size: 15px;
          font-weight: 800;

          @include ipad {
            color: #fe5d89;
            font-family: Avenir;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.35px;
          }
        }
      }
    }
  }
}
</style>