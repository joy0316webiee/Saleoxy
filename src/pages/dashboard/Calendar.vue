<template>
  <div class="calendar">
    <div class="calendar-desktop page-border">
      <div class="calendar-head page-border-head">
        <img src="@/assets/images/ic_calendar_blue.png" alt="icon-calendar-blue">
        <span>Calendar</span>
      </div>
      <div class="calendar-body page-border-body">
        <div class="calendar-menubar page-border-menubar">
          <div class="calendar-menubar-left page-border-menubar-left">
            <span class="arr arr-left"></span>
            <span class="date">Monday , Apr 9, 2019</span>
            <span class="arr arr-right"></span>
          </div>
          <div class="calendar-menubar-right page-border-menubar-right">
            <div class="add-holiday">
              <div class="add-holiday-label">
                <span>Add Holiday</span>
              </div>
              <div class="add-holiday-image" @click="onHolidayAdd">
                <img src="@/assets/images/ic_block_yellow.png" alt="icon-block-yellow">
              </div>
            </div>
            <div class="new">
              <div class="new-label">
                <span>New</span>
              </div>
              <div class="new-image" @click="onBookingAdd">
                <img src="@/assets/images/ic_add_yellow.png" alt="icon-add-yellow">
              </div>
            </div>
          </div>
        </div>
        <div class="calendar-table">
          <div class="calendar-table-header">
            <div class="time">
              <img src="@/assets/images/ic_clock_yellow.png" alt="icon-clock-yellow">
            </div>
            <div class="day">
              <span>MONDAY, Apr 9</span>
            </div>
            <div class="day">
              <span>TUESDAY, Apr 10</span>
            </div>
            <div class="day">
              <span>WEDNESDAY, Apr 11</span>
            </div>
            <div class="day">
              <span>THURSDAY, Apr 12</span>
            </div>
            <div class="day">
              <span>FRIDAY, Apr 13</span>
            </div>
            <div class="day">
              <span>SATURDAY, Apr 14</span>
            </div>
            <div class="day">
              <span>SUNDAY, Apr 15</span>
            </div>
          </div>
          <div class="calendar-table-body">
            <div class="calendar-table-body-wrapper">
              <div class="calendar-table-body-row" v-for="index in 24" v-bind:key="'time' + index">
                <div class="time">
                  <span>{{ index > 12 ? index - 12 + 'PM' : index + 'AM' }}</span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                  <div class="timeline timeline-1"></div>
                  <div class="timeline timeline-2">
                    <BookingTicket
                      v-if="index==9"
                      type="Patient#123"
                      clientName="John Smith"
                      date="2019/04/30"
                      starts="02:00PM"
                      ends="03:00PM"
                      phoneNumber="+44123421344"
                      :onDelete="onBookingDelete"
                      :onUpdate="onBookingUpdate"
                    />
                  </div>
                  <div class="timeline timeline-3"></div>
                  <div class="timeline timeline-4"></div>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
                <div class="day">
                  <span class="dotted"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="calendar-table-foot"></div>
        </div>
      </div>
    </div>
    <div class="calendar-mobile">
      <div class="calendar-head">
        <div class="calendar-head-left">
          <img src="@/assets/images/ic_calendar_blue.png" alt="calendar-blue">
          <span>Calendar</span>
        </div>
        <div class="calendar-head-right">
          <div class="add-holiday" @click="onHolidayAdd">
            <img src="@/assets/images/ic_block_yellow.png" alt="block-yellow">
          </div>
          <div class="new" @click="onBookingAdd">
            <img src="@/assets/images/ic_add_yellow.png" alt="add-yellow">
          </div>
        </div>
      </div>
      <div class="calendar-body">
        <div class="calendar-menubar">
          <span class="arr arr-left"></span>
          <span class="date">Monday , Apr 9, 2019</span>
          <span class="arr arr-right"></span>
        </div>
        <div class="calendar-list">
          <div class="calendar-list-header">
            <div class="day sunday">
              <span class="day-of-week">S</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 1}"
                @click="onChangeDay(1)"
              >9</span>
            </div>
            <div class="day">
              <span class="day-of-week">M</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 2}"
                @click="onChangeDay(2)"
              >10</span>
            </div>
            <div class="day">
              <span class="day-of-week">T</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 3}"
                @click="onChangeDay(3)"
              >11</span>
            </div>
            <div class="day">
              <span class="day-of-week">W</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 4}"
                @click="onChangeDay(4)"
              >12</span>
            </div>
            <div class="day">
              <span class="day-of-week">T</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 5}"
                @click="onChangeDay(5)"
              >13</span>
            </div>
            <div class="day">
              <span class="day-of-week">F</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 6}"
                @click="onChangeDay(6)"
              >14</span>
            </div>
            <div class="day">
              <span class="day-of-week">S</span>
              <span
                class="day-of-month"
                :class="{active: currentDay === 7}"
                @click="onChangeDay(7)"
              >15</span>
            </div>
          </div>
          <div class="calendar-list-body">
            <div class="calendar-list-body-wrapper">
              <transition-group
                class="bookings"
                :enter-active-class="carouselEnterClass"
                :leave-active-class="carouselLeaveClass"
              >
                <div
                  class="calendar-list-body-day"
                  v-for="day in 7"
                  v-bind:key="'day' + day"
                  v-show="day === currentDay"
                >
                  <div class="calendar-list-row" v-for="index in 24" v-bind:key="'time' + index">
                    <div class="time">
                      <span>{{ index > 12 ? index - 12 + 'PM' : index + 'AM' }}</span>
                    </div>
                    <div class="day">
                      <div class="day-wrapper">
                        <div class="timeline timeline-1"></div>
                        <div class="timeline timeline-2">
                          <BookingTicket
                            v-if="index==day"
                            type="Patient#123"
                            clientName="John Smith"
                            date="2019/04/30"
                            starts="02:00PM"
                            ends="03:00PM"
                            phoneNumber="+44123421344"
                            :onDelete="onBookingDelete"
                            :onUpdate="onBookingUpdate"
                          />
                        </div>
                        <div class="timeline timeline-3"></div>
                        <div class="timeline timeline-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
          <div class="calendar-list-foot"></div>
        </div>
      </div>
    </div>
    <ModalBox v-show="isModalVisible" @close="closeModal"/>
    <transition
      name="sliding"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <Slidingbar v-if="slidingShow" :isEdit="isBookingEdit" :onClose="onCloseSliding"/>
    </transition>
  </div>
</template>

<script>
import BookingTicket from "@/components/BookingTicket";
import Slidingbar from "@/components/Slidingbar";
import ModalBox from "@/components/ModalBox";
import router from "@/router";
import { ftruncate, close } from "fs";

export default {
  name: "Calendar",
  components: {
    BookingTicket,
    Slidingbar,
    ModalBox
  },
  data() {
    return {
      slidingShow: false,
      isBookingEdit: true,
      isModalVisible: false,
      carouselRight: true,
      currentDay: 1
    };
  },
  computed: {
    carouselEnterClass() {
      let classes = "animated";
      console.log(this.carouselRight);
      if (this.carouselRight) classes += " slideInLeft";
      else classes += " slideInRight";

      return classes;
    },
    carouselLeaveClass() {
      let classes = "animated";
      if (this.carouselRight) classes += " slideOutRight";
      else classes += " slideOutLeft";

      return classes;
    }
  },
  methods: {
    onHolidayAdd() {
      this.$router.push("/setholiday");
    },
    onBookingAdd() {
      this.isBookingEdit = false;
      this.slidingShow = true;
    },
    onBookingDelete() {
      // console.log("booking delete");
      this.isModalVisible = true;
    },
    onBookingUpdate() {
      this.isBookingEdit = true;
      this.slidingShow = true;
    },
    onCloseSliding() {
      this.slidingShow = false;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    onChangeDay(day) {
      this.carouselRight = this.currentDay >= day;
      this.currentDay = day;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";
@import "~https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "@/assets/sass/base.scss";
@import "@/assets/sass/scrollbar.scss";

.calendar {
  // position: relative;
  overflow: hidden;

  .calendar-desktop {
    @include tablet {
      display: none;
    }

    .calendar-body {
      .calendar-table {
        .calendar-table-header {
          display: grid;
          grid-template-columns: 7% repeat(7, 1fr);
          // height: 50px;
          margin-right: 15px;
          border-left: 1px solid #989898;
          border-top: 1px solid #989898;

          > div {
            text-align: center;
            border-right: 1px solid #989898;
            border-bottom: 1px solid #989898;
            padding: 15px 0px;
          }
          .time {
            padding: 8px 0px;

            img {
              width: 26px;
            }
          }
          .day {
            span {
              color: #164bcd;
              font-family: Avenir;
              font-size: 13px;
              font-weight: 800;
            }
          }
        }
        .calendar-table-body {
          overflow-x: hidden;
          overflow-y: auto;
          height: 719px;

          .calendar-table-body-wrapper {
            border-left: 1px solid #989898;
            display: grid;
            grid-template-rows: repeat(24, 60px);
            margin-right: 5px;

            .calendar-table-body-row {
              display: grid;
              grid-template-columns: 7% repeat(7, 1fr);

              > div {
                border-right: 1px solid #989898;

                &.time {
                  text-align: center;
                  padding: 20px 0px;

                  span {
                    color: #ff9201;
                    font-family: "Open Sans";
                    font-size: 13px;
                    font-weight: 400;
                    text-transform: uppercase;
                  }
                }
                &.day {
                  border-bottom: 1px solid #989898;
                  position: relative;

                  .timeline {
                    height: 25%;
                    position: relative;
                  }
                  .dotted {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    border-bottom: 1px dashed #989898;
                    position: absolute;
                    top: 50%;
                  }
                }
              }
            }
          }
        }
        .calendar-table-foot {
          margin-right: 15px;
          border-bottom: 1px solid #989898;
        }
      }
    }
  }
  .calendar-mobile {
    display: none;
    padding: 20px 73px 0px;

    @include tablet {
      display: block;
    }
    @include ipad {
      padding: 9px 8px 0px 7px;
    }

    .calendar-head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include ipad {
        padding-left: 8px;
      }

      .calendar-head-left {
        display: flex;
        align-items: center;

        img {
          width: 31px;
          height: 31px;

          @include ipad {
            width: 23px;
            height: 23px;
          }
        }
        span {
          color: #6b3fb8;
          font-family: Avenir-heavy;
          font-size: 24px;
          font-weight: 800;
          margin-top: 7px;
          margin-left: 11px;

          @include ipad {
            font-size: 14px;
          }
        }
      }
      .calendar-head-right {
        display: flex;

        > div {
          &:hover {
            cursor: pointer;
          }

          &.add-holiday {
            img {
              width: 35px;

              @include ipad {
                width: 24px;
                height: 21px;
              }
            }
          }
          &.new {
            margin-left: 15px;

            @include ipad {
              margin-left: 12px;
            }

            img {
              width: 31px;
              height: 31px;

              @include ipad {
                width: 22px;
                height: 22px;
              }
            }
          }
        }
      }
    }
    .calendar-body {
      // height: 831px;
      box-shadow: 0 15px 13px rgba(0, 0, 0, 0.04);
      border: 2px solid #9b7bcb;
      background-color: #ffffff;
      margin-top: 20px;

      @include ipad {
        margin-top: 8px;
      }

      .calendar-menubar {
        padding: 15px 0px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        @include ipad {
          padding: 9px 0px 4px;
        }

        .arr {
          width: 12px;
          height: 18px;
          display: inline-block;
          background-size: contain;
          background-repeat: no-repeat;

          @include ipad {
            width: 8px;
            height: 13px;
          }

          &:hover {
            cursor: pointer;
          }
          &.arr-left {
            background-image: url("~@/assets/images/arr_left_yellow.png");
          }
          &.arr-right {
            background-image: url("~@/assets/images/arr_right_yellow.png");
          }
        }
        .date {
          color: #ff9201;
          font-family: Avenir-heavy;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.1px;
          padding: 0px 60px;

          @include ipad {
            font-size: 14px;
            padding: 0px 34px;
          }
        }
      }
      .calendar-list {
        .calendar-list-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          padding-right: 15px !important;
          border-bottom: 1px solid #9b7bcb;
          padding: 5px 0px;

          @include ipad {
            padding-top: 0px;
          }

          .day {
            display: flex;
            flex-direction: column;
            text-align: center;

            .day-of-week {
              color: #164bcd;
              font-family: Avenir;
              font-size: 20px;
              font-weight: 800;
              text-transform: uppercase;

              @include ipad {
                font-size: 13px;
              }
            }
            .day-of-month {
              border-radius: 50%;
              width: 30px;
              height: 30px;
              margin: 0 auto;
              color: #164bcd;
              font-family: Avenir-heavy;
              font-size: 20px;
              font-weight: 800;
              padding: 5px 3px;

              @include ipad {
                font-size: 13px;
                width: 18px;
                height: 19px;
                padding: 3px 1px;
              }

              &:hover {
                cursor: pointer;
              }

              &.active {
                color: #ffffff;
                background-color: #164bcd;
              }
            }

            &.sunday {
              .day-of-week {
                color: #ff9201;
              }
              .day-of-month {
                color: #ff9201;

                &.active {
                  color: #ffffff;
                  background-color: #ff9201;
                }
              }
            }
          }
        }
        .calendar-list-body {
          overflow-x: hidden;
          overflow-y: auto;
          height: 740px;
          margin-right: 8px;
          // @include tablet {
          //   height: 700px;
          // }
          @include ipad {
            margin-right: 3px;
            height: 636px;
          }

          .calendar-list-body-wrapper {
            margin-right: 8px;
            position: relative;

            @include ipad {
              margin-right: 1px;
            }

            .calendar-list-body-day {
              position: absolute;
              left: 0px;
              right: 0px;

              .calendar-list-row {
                display: grid;
                grid-template-columns: 1fr 6fr;

                .time {
                  text-align: center;
                  border-right: 1px solid #9b7bcb;
                  padding: 0px 0px 53px;

                  @include ipad {
                    padding: 0px 0px 38px;
                  }

                  span {
                    color: #ff9201;
                    font-family: "Open Sans";
                    font-size: 17px;
                    font-weight: 400;
                    text-transform: uppercase;

                    @include ipad {
                      font-size: 13px;
                    }
                  }
                }
                .day {
                  padding: 2px;

                  .day-wrapper {
                    height: 100%;
                    background-color: #e9eefe;

                    .timeline {
                      height: 25%;
                      position: relative;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>