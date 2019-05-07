<template>
  <div class="page-container holiday">
    <div class="page-head holiday-head">
      <div class="stepper-container">
        <div class="to-back">
          <span class="to-back-icon" @click="getBack()">
            <img src="@/assets/images/ic_back.png" alt="to-back-icon">
          </span>
          <span class="to-back-label">Back</span>
        </div>
      </div>
      <div class="holiday-theme">
        <div class="holiday-theme-image">
          <img src="@/assets/images/ic_block_yellow.png">
        </div>
        <div class="holiday-theme-label">
          <span>Going on vacation? Taking some time off? Block off time on your calendar to prevent clients from booking appointments (existing appointments will remain on your calendar).</span>
        </div>
      </div>
    </div>
    <div class="holiday-body">
      <div class="holiday-body-title">
        <label>Title</label>
        <input placeholder="Ex: Christmas holidays">
      </div>
      <div class="holiday-body-blockdays">
        <div class="holiday-body-blockdays-title">
          <label>Block Multiple Days</label>
        </div>
        <div class="holiday-body-blockdays-range">
          <div class="blockdays-start">
            <DateInputPicker/>
          </div>
          <div class="blockdays-through">
            <span>through</span>
          </div>
          <div class="blockdays-end">
            <DateInputPicker/>
          </div>
        </div>
        <div class="holiday-body-blockdays-notice">
          <span>Rewrite the same date for just one day.</span>
        </div>
      </div>
      <div class="holiday-body-notes">
        <label>Notes</label>
        <textarea placeholder="Notes about this holiday"></textarea>
      </div>
    </div>
    <div class="holiday-foot">
      <button class="btn-blue">Block Off time</button>
    </div>
  </div>
</template>

<script>
import DateInputPicker from "@/components/DateInputPicker";
import router from "@/router";

export default {
  name: "SettingHoliday",
  components: {
    DateInputPicker
  },
  methods: {
    getBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#707070);

.holiday {
  width: 1085px;
  height: 626px;
  padding: 72px 0px 21px 177px;
  margin-top: 164px;

  @include desktop-md {
    width: 900px;
    height: 520px;
    padding: 25px 0px 20px 126px;
  }
  @include tablet {
    width: 650px;
    height: 634px;
    padding: 95px 0px 20px 62px;
  }
  @include ipad {
    width: 399px;
    height: 613px;
    padding: 47px 27px 18px;
    margin-top: 70px;
  }
  @include iphone {
    width: 337px;
    padding: 47px 0px 20px 18px;
  }

  .holiday-head {
    padding-right: 176px;

    @include desktop-md {
      padding-right: 71px;
    }
    @include ipad {
      padding-right: 10px;
    }

    .stepper-container {
      .to-back {
        top: 29px;
        left: 20px;

        @include ipad {
          top: 19px;
          left: 19px;
        }
      }
    }
    .holiday-theme {
      display: flex;
      align-items: center;

      .holiday-theme-image {
        img {
          width: 91px;
          height: 80px;

          @include ipad {
            width: 61px;
            height: 56px;
          }
        }
      }
      .holiday-theme-label {
        margin-left: 8px;
        text-align: left;

        span {
          color: #164bcd;
          font-family: Avenir-black;
          font-size: 20px;
          font-weight: 900;

          @include tablet {
            font-size: 16px;
          }
          @include ipad {
            font-size: 11px;
          }
        }
      }
    }
  }
  .holiday-body {
    margin-top: 36px;

    @include desktop-md {
      margin-top: 14px;
    }

    > div {
      input,
      select,
      textarea {
        border-radius: 4px;
        border: 1px solid #ff9201;
        background-color: #ffffff;
        margin-top: 11px;
        color: #707070;
        font-family: Avenir-medium;
        font-weight: 500;
      }
      label {
        font-family: Avenir-medium;
        font-size: 16px;
        font-weight: 500;
        color: #ff9201;
      }
      &.holiday-body-title {
        display: flex;
        flex-direction: column;

        input {
          width: 310px;
          height: 37px;
          font-size: 14px;
          padding: 8px;
        }
      }
      &.holiday-body-blockdays {
        margin-top: 24px;
        display: flex;
        flex-direction: column;

        .holiday-body-blockdays-range {
          display: flex;
          align-items: center;

          @include ipad {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 12px;
          }

          > div {
            select {
              width: 164px;
              height: 37px;
              border-radius: 4px;
              border: 1px solid #ff9201;
              background-color: #ffffff;
            }
            &.blockdays-through {
              @include ipad {
                margin: 15px 0px 9px;
              }

              span {
                color: #164bcd;
                font-family: Avenir-black;
                font-size: 16px;
                font-weight: 900;
                line-height: 15px;
                margin: 0px 62px;

                @include ipad {
                  font-size: 13px;
                  margin: 0px 10px;
                }
              }
            }
          }
        }
        .holiday-body-blockdays-notice {
          @include ipad {
            margin-top: 5px;
          }

          span {
            color: #3b86ff;
            font-family: Avenir-medium;
            font-size: 12px;
            font-weight: 500;

            @include ipad {
              color: #6b3fb8;
            }
          }
        }
      }
      &.holiday-body-notes {
        display: flex;
        flex-direction: column;
        margin-top: 11px;

        @include ipad {
          margin-right: 10px;
        }

        textarea {
          width: 631px;
          height: 116px;
          padding: 14px 8px;
          font-size: 12px;
          resize: none;

          @include tablet {
            width: 531px;
          }
          @include ipad {
            width: 100%;
          }
        }
      }
    }
  }
  .holiday-foot {
    button {
      width: 198px;
      height: 59px;
      font-family: Avenir;
      font-size: 20px;
      letter-spacing: 0.72px;
      line-height: 26px;
      position: absolute;
      right: 54px;
      bottom: 21px;

      @include desktop-md {
        right: 20px;
        bottom: 9px;
      }
      @include tablet {
        right: 30px;
        bottom: 24px;
        width: 175px;
        height: 50px;
        font-size: 18px;
      }
      @include ipad {
        width: 131px;
        height: 34px;
        font-size: 15px;
        right: 16px;
        bottom: 16px;
      }
    }
  }
}
</style>