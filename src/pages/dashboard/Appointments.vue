<template>
  <div class="appointments page-border">
    <div class="appointments-head page-border-head">
      <div class="appointments-head-left">
        <img src="@/assets/images/ic_note_blue.png" alt="icon-appointments-blue">
        <span>Appointments</span>
      </div>
      <div class="appointments-head-right">
        <div class="add-holiday-image" @click="onHolidayAdd">
          <img src="@/assets/images/ic_block_yellow.png" alt="icon-block-yellow">
        </div>
        <div class="new-image" @click="onBookingAdd">
          <img src="@/assets/images/ic_add_yellow.png" alt="icon-add-yellow">
        </div>
      </div>
    </div>
    <div class="appointments-body page-border-body">
      <div class="appointments-menubar page-border-menubar">
        <div class="appointments-menubar-left page-border-menubar-left">
          <span class="arr arr-left"></span>
          <span class="date">Apr 9, 2019</span>
          <span class="arr arr-right"></span>
        </div>
        <div class="appointments-menubar-right page-border-menubar-right">
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
      <div class="appointments-list">
        <div class="appointments-list-row" v-for="index in 40" v-bind:key="index">
          <div class="time">
            <span>07:00 am</span>
          </div>
          <div class="date">
            <div class="date-wrapper">
              <span>Monday</span>&nbsp;
              <span>Apr 9, 2019</span>
            </div>
          </div>
          <div class="services">
            <div class="details">
              <span>Patient #12323, Service#2.Service#5</span>
            </div>
            <div class="actions">
              <div class="update">
                <img src="@/assets/images/ic_update_blue.png" alt="icon-update">
              </div>
              <div class="delete" :class="{active: currentRow === index}" @click="showModal(index)">
                <img src="@/assets/images/ic_delete_blue.png" alt="icon-delete">
              </div>
            </div>
          </div>
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
import Slidingbar from "@/components/Slidingbar";
import ModalBox from "@/components/ModalBox";
import router from "@/router";

export default {
  name: "Appointments",
  components: {
    Slidingbar,
    ModalBox
  },
  data() {
    return {
      slidingShow: false,
      isModalVisible: false,
      currentRow: 0
    };
  },
  methods: {
    onHolidayAdd() {
      this.$router.push("/setholiday");
    },
    onBookingAdd() {
      this.isBookingEdit = false;
      this.slidingShow = true;
    },
    onCloseSliding() {
      this.slidingShow = false;
    },
    showModal(index) {
      this.isModalVisible = true;
      this.currentRow = index;
    },
    closeModal() {
      this.isModalVisible = false;
      this.currentRow = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";
@import "~https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "@/assets/sass/base.scss";
@import "@/assets/sass/scrollbar.scss";

.appointments {
  @include ipad {
    padding: 13px 8px 0px 7px !important;
    overflow: hidden;
  }

  .appointments-head {
    @include ipad {
      padding-bottom: 7px;
      justify-content: space-between;
      align-items: flex-start;
    }

    img {
      @include ipad {
        width: 23px;
        height: 23px;
      }
    }
    span {
      @include ipad {
        font-size: 14px;
        margin-left: 12px;
      }
    }

    .appointments-head-left {
      display: flex;
      align-items: center;
    }
    .appointments-head-right {
      display: none;

      @include ipad {
        display: inherit;
      }

      .add-holiday-image {
        img {
          width: 24px;
          height: 21px;
        }
      }
      .new-image {
        margin-left: 12px;
        img {
          width: 22px;
          height: 21px;
        }
      }
    }
  }

  .appointments-body {
    @include tablet {
      padding: 25px 3px 8px 17px;
      // height: auto;
    }
    @include ipad {
      padding: 9px 3px 8px 8px;
      border: 2px solid #9b7bcb;
      height: 711px;
    }

    .appointments-menubar {
      padding-bottom: 27px;

      @include ipad {
        display: none;
      }

      .appointments-menubar-left {
        .date {
          padding: 0 60px;
        }
      }
    }
    .appointments-list {
      overflow-x: hidden;
      overflow-y: auto;
      height: 790px;
      margin-right: 15px;

      @include ipad {
        height: 693px;
        margin-right: 1px;
      }

      .appointments-list-row {
        display: flex;
        margin-bottom: 17px;
        margin-right: 10px;

        @include ipad {
          margin-bottom: 10px;
          margin-right: 3px;
        }

        .time {
          // width: 111px;
          width: 9%;
          height: 50px;
          border-radius: 4px;
          background-color: #ff9201;
          text-align: center;
          padding: 16px 0px;

          @include tablet {
            width: 12%;
          }
          @include ipad {
            width: 16.3%;
            height: 36px;
            padding: 7px 0px;
          }

          span {
            color: #ffffff;
            font-family: Avenir-heavy;
            font-size: 16px;
            font-weight: 800;
            letter-spacing: 0.11px;

            @include tablet {
              font-size: 12px;
            }
            @include ipad {
              font-size: 7px;
            }
          }
        }
        .date {
          // width: 214px;
          width: 16%;
          height: 50px;
          border-radius: 4px;
          background-color: #3b86ff;
          text-align: center;
          // padding: 16px 0px;
          margin-left: 10px;
          position: relative;

          @include tablet {
            width: 18%;
          }
          @include ipad {
            margin-left: 4px;
            height: 36px;
            width: 26%;
            padding: 0px 0px;
          }

          .date-wrapper {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include ipad {
              span:nth-child(2) {
                display: block;
              }
            }

            span {
              color: #ffffff;
              font-family: Avenir-heavy;
              font-size: 16px;
              font-weight: 800;
              letter-spacing: 0.11px;

              @include tablet {
                font-size: 12px;
              }
              @include ipad {
                font-size: 7px;
                line-height: 9px;
              }
            }
          }
        }
        .services {
          // width: 1020px;
          width: 75%;
          height: 50px;
          border-radius: 4px;
          background-color: #e9eefe;
          margin-left: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 14px;
          padding-right: 12px;

          @include tablet {
            width: 70%;
          }
          @include ipad {
            width: 95%;
            height: 36px;
            margin-left: 4px;
            padding-left: 15px;
            padding-right: 4px;
          }

          .details {
            span {
              color: #6d0f7e;
              font-family: Avenir-heavy;
              font-size: 16px;
              font-weight: 800;
              letter-spacing: 0.11px;

              @include tablet {
                font-size: 12px;
              }
              @include ipad {
                font-size: 7px;
              }
            }
          }
          .actions {
            display: flex;
            align-items: center;

            .update {
              width: 33px;
              height: 33px;
              padding: 6px;

              @include ipad {
                width: 24px;
                height: 24px;
                padding: 4px;
              }

              img {
                width: 21px;
                height: 16px;

                @include ipad {
                  width: 15px;
                  height: 12px;
                }
              }
              &:hover {
                cursor: pointer;
              }
            }
            .delete {
              width: 33px;
              height: 32px;
              padding: 5px 10px;

              @include ipad {
                width: 24px;
                height: 24px;
                padding: 4px 7px;
              }

              &.active {
                background-color: #ff9201;
                border-radius: 50%;

                img {
                  display: block;
                  background: url("~@/assets/images/ic_delete.png") no-repeat;
                  background-size: contain;
                  padding-left: 13px;

                  @include ipad {
                    padding-left: 9px;
                  }
                }
              }
              &:hover {
                cursor: pointer;
              }
              img {
                width: 13px;
                height: 20px;

                @include ipad {
                  width: 9px;
                  height: 14px;
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