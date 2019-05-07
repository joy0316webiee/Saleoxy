<template>
  <div class="appointment">
    <div class="page-container appointment">
      <div class="page-head appointment-head">
        <div class="stepper-container">
          <div class="to-back">
            <router-link to="/addcalendar">
              <span class="to-back-icon">
                <img src="@/assets/images/ic_back.png" alt="to-back-icon">
              </span>
            </router-link>
            <span class="to-back-label">Back</span>
          </div>
          <Stepper value="3"/>
        </div>
        <div class="title">
          <h1>Welcome Onboard!</h1>
          <h2>you’re 1 steps from setting up your workspace</h2>
          <h3>
            Set Your Availability
            <span class="letter-desk">—</span>
            <br class="letter-mb">Before Someone Books You At Midnight
          </h3>
        </div>
      </div>
      <div class="appointment-body">
        <div class="appointment-table">
          <div class="appointment-table-header">
            <div class="header-no">
              <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
            </div>
            <div class="header-start">
              <span>Start</span>
            </div>
            <div class="header-end">
              <span>End</span>
            </div>
            <div class="header-days">
              <span>Working days</span>
            </div>
          </div>
          <div class="appointment-table-body">
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appoinment-table-header-mb header-part-1">
                <div class="header-no">
                  <img src="@/assets/images/calendar_icon_red.png" alt="calender-icon-red">
                </div>
                <div class="header-start">
                  <span>Start</span>
                </div>
                <div class="header-end">
                  <span>End</span>
                </div>
              </div>
              <div class="appointment-table-col-no">1</div>
              <div class="appointment-table-col-start">
                <MaskedTimeBox/>
              </div>
              <div class="appointment-table-col-end">
                <MaskedTimeBox/>
              </div>
              <div class="appoinment-table-header-mb header-part-2">
                <div class="header-days">
                  <span>Working days</span>
                </div>
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TU
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  WE
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  TH
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  FR
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
                <span class="day-blue">
                  SA
                  <i>
                    <img src="@/assets/images/ic_tick.png" alt="tick-icon">
                  </i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
          </div>
          <div class="appointment-table-footer">
            <span>+</span>
          </div>
        </div>
      </div>
      <div class="appointment-foot">
        <router-link to="/complete">
          <button class="btn-blue">CONTINUE</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/Stepper.vue";
import MaskedTimeBox from "@/components/MaskedTimeBox.vue";

export default {
  name: "AddAppointment",
  components: {
    Stepper,
    MaskedTimeBox
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/scrollbar.scss";

.appointment {
  @include desktop-md {
    height: 571px;
  }
  @include tablet {
    height: 677px;
  }
  @include ipad {
    height: 613px;
  }
  .appointment-head {
    .title {
      padding-top: 31px;

      @include ipad {
        padding-top: 46px;
      }

      h1 {
        @include ipad {
          margin-bottom: 5px;
        }
      }
      h2 {
        margin-bottom: 0px;

        @include ipad {
          margin-bottom: 5px;
        }
      }
      h3 {
        color: $red-light;
        font-size: $font-sm-3;
        font-weight: 400;
        margin-top: 5px;
        margin-bottom: 15px;

        @include ipad {
          font-size: 11px;
          text-align: center;
          margin: 12px 55px 22px;
        }
        .letter-desk {
          @include ipad {
            display: none;
          }
        }
        .letter-mb {
          display: none;

          @include ipad {
            display: inherit;
          }
        }
      }
    }
  }
  .appointment-body {
    width: 911px;
    height: 342px;
    border-radius: 21px;
    border: 5px solid $white-darken;
    margin: 0 auto;

    @include desktop-md {
      width: auto;
      margin: 0px 23px;
    }
    @include tablet {
      height: 457px;
    }
    @include ipad {
      margin: 0px 4px;
      height: 357px;
      border: 2px solid #d3d4fc;
    }

    .appointment-table {
      @mixin table-header {
        > div {
          color: $red-light;
          font-family: "Source Sans Pro";
          font-size: $font-md-3;
          text-align: center;
        }
        .header-no {
          img {
            height: 34px;
          }
        }

        @content;
      }
      .appointment-table-header {
        @include table-header;

        background-color: white;
        display: grid;
        grid-template-columns: [first] 110px [line2] 205px [line3] 69px [line4] 481px [end];
        padding: 17px 0px 8px 11px;
        border-top-left-radius: 21px;
        border-top-right-radius: 21px;

        @include desktop-md {
          grid-template-columns: [first] 95px [line2] 127px [line3] 69px [line4] 470px [end];
        }
        @include tablet {
          display: none;
        }
      }
      .appointment-table-body {
        height: 214px;
        margin: 0px 16px 0px 23px;
        overflow-x: hidden;
        overflow-y: auto;

        @include tablet {
          padding-top: 14px;
          margin: 0px 11px 0px 23px;
          height: 414px;
        }
        @include ipad {
          height: 292px;
          margin: 9px 6px 0px 10px;
          padding-top: 5px;
        }

        .appointment-table-row {
          display: grid;
          grid-template-columns: [first] 82px [line2] 239px [line3] 32px [line4] 561px [end];
          justify-items: center;
          border-radius: 47px;
          background-color: $white-darken;
          position: relative;
          width: 97%;
          padding-top: 9px;
          padding-bottom: 9px;
          margin-bottom: 15px;

          @include desktop-md {
            grid-template-columns: [first] 64px [line2] 164px [line3] 32px [line4] 547px [end];
          }
          @include tablet {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            border-radius: 18px;
            text-align: center;
          }
          @include ipad {
            width: 98%;
            padding-top: 5px;
            padding-bottom: 13px;
            margin-bottom: 8px;
          }

          > div {
            align-self: center;
          }

          .appoinment-table-header-mb {
            @include table-header {
              > div {
                font-size: 20px;

                @include ipad {
                  font-size: 11px;
                }
              }
              .header-no {
                img {
                  height: 28px;

                  @include ipad {
                    height: 17px;
                  }
                }
              }
            }
            display: none;

            &.header-part-1 {
              @include tablet {
                display: grid;
                grid-template-columns: [first] 98px [line2] 205px [line3] 69px [line4];
                flex-basis: 100%;
                padding-bottom: 10px;
              }
              @include ipad {
                grid-template-columns: [first] 77px [line2] 99px [line3] 114px [line4];
              }
              @include iphone {
                grid-template-columns: [first] 60px [line2] 85px [line3] 61px [line4];
              }
            }
            &.header-part-2 {
              @include tablet {
                display: inherit;
                flex-basis: 100%;
                padding: 10px 0px;

                .header-days {
                  margin: 0 auto;
                }
              }
            }
          }
          .appointment-table-col-no {
            color: $red-light;
            font-family: Avenir-Black;
            font-size: $font-xs-1;
            font-weight: 900;
            line-height: 16px;

            @include tablet {
              flex-basis: 18%;
            }
            @include ipad {
              font-size: 11px;
              flex-basis: 20%;
            }
          }
          .appointment-table-col-start {
            @include tablet {
              flex-basis: 39%;
            }
            @include ipad {
              flex-basis: 14%;
            }
          }
          .appointment-table-col-end {
            @include tablet {
              flex-basis: 43%;
              padding-right: 158px;
            }
            @include ipad {
              flex-basis: 47%;
              padding-right: 73px;
            }
          }
          .appointment-table-col-days {
            display: flex;
            justify-content: space-between;
            padding-left: 60px;
            padding-right: 111px;
            width: 100%;

            @include tablet {
              flex-basis: 100%;
              margin: 0 auto;
              padding-left: 30px;
              padding-right: 30px;
            }

            span {
              position: relative;
              width: 39px;
              height: 39px;
              padding: 10px;
              color: $red-light;
              font-family: "Source Sans Pro";
              font-size: $font-xxs;
              font-weight: 700;
              line-height: 12px;
              text-transform: uppercase;
              display: inline-block;
              border-radius: 50%;

              @include ipad {
                width: 26px;
                height: 26px;
                font-size: 7px;
                padding: 6px;
              }

              i {
                position: absolute;
                right: -5px;
                top: 0px;
                display: inline-block;
                width: 13px;
                height: 13px;
                background-color: $blue-primary;
                border-radius: 50%;
                padding: 0px 3px;

                @include ipad {
                  width: 9px;
                  height: 9px;
                  right: -2px;
                  top: 0px;
                  padding: 0px;
                }

                img {
                  width: 8px;
                  height: 6px;

                  @include ipad {
                    width: 6px;
                    height: 5px;
                    margin: 1px 1px 1px 2px;
                  }
                }
              }
            }

            .day-red {
              color: $red-light;
              border: 3px solid $red-light;

              @include ipad {
                border: 1px solid $red-light;
              }
            }
            .day-blue {
              color: $blue-primary;
              border: 3px solid $blue-primary;

              @include ipad {
                border: 1px solid $blue-primary;
              }
            }
          }
          .appointment-table-col-remove {
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translate(12px, -50%);

            @include tablet {
              top: 6px;
              right: 6px;
            }
            @include ipad {
              top: 6px;
              right: 10px;
            }

            span {
              color: $red-light;
              font-family: Avenir-heavy;
              font-size: $font-xs-1;
              line-height: 8px;
              width: 22px;
              height: 22px;
              border-radius: 50%;
              border: 2px solid $red-light;
              padding: 5px;
              display: inline-block;

              &:hover {
                color: darken($red-light, 10%);
                border: 2px solid darken($red-light, 10%);
                cursor: pointer;
              }

              @include ipad {
                width: 17px;
                height: 17px;
                font-size: 12px;
                padding: 3px;
              }
            }
          }
        }
      }
      .appointment-table-footer {
        padding-top: 18px;
        padding-left: 53px;

        @include desktop-md {
          padding-left: 46px;
        }
        @include tablet {
          padding-top: 3px;
        }
        @include ipad {
          padding-top: 15px;
          padding-left: 18px;
        }

        span {
          color: $red-light;
          font-family: Avenir;
          font-size: 13px;
          font-weight: 900;
          line-height: 7px;
          display: inline-block;
          width: 23px;
          height: 22px;
          padding: 6px 5px;
          border-radius: 17px;
          border: 2px solid $red-light;

          &:hover {
            color: darken($red-light, 10%);
            border: 2px solid darken($red-light, 10%);
            cursor: pointer;
          }

          @include ipad {
            width: 16px;
            height: 16px;
            font-size: 9px;
            padding: 3px;
          }
        }
      }
    }
  }
  .appointment-foot {
    position: absolute;
    right: 72px;
    bottom: 18px;

    @include desktop-md {
      right: 31px;
      bottom: 11px;
    }
    @include ipad {
      right: 16px;
      bottom: 24px;
    }

    button {
      width: 193px;
      height: 58px;
      font-size: $font-md-3;
      letter-spacing: 1.12px;
      line-height: 33px;
      text-transform: uppercase;

      @include ipad {
        width: 109px;
        height: 33px;
        font-size: 14px;
      }
    }
  }
}

::-webkit-input-placeholder {
  /* Edge */
  color: $red-light;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $red-light;
}

::placeholder {
  color: $red-light;
}
</style>