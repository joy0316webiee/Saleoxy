<template>
  <div class="layout dashboard">
    <HeaderDashboard :sidebarActive="sidebarShow"/>
    <div class="dashboard-container">
      <transition
        name="sidebar"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <div class="dashboard-sidebar" v-if="sidebarShow">
          <div class="dashboard-sidebar-head">
            <div class="dashboard-sidebar-head-left">
              <img src="@/assets/images/flag.png" alt="img-flag">
            </div>
            <div class="dashboard-sidebar-head-right">
              <div class="panel-top">
                <div class="title">
                  <span>Best Doctor official page</span>
                </div>
                <div class="btn-edit">
                  <a href="#">Edit</a>
                </div>
              </div>
              <div class="panel-bottom">
                <a class="btn-add" href="#">+</a>
              </div>
            </div>
          </div>
          <div class="dashboard-sidebar-body">
            <div class="search">
              <input placeholder="Search...">
            </div>
            <div class="date-picker">
              <DatePicker v-model="currentDate"/>
            </div>
          </div>
          <div class="dashboard-sidebar-foot">
            <div
              class="menu menu-calendar"
              :class="{active: activeMenu === MENU_CALENDAR}"
              @click="onActive(MENU_CALENDAR)"
            >
              <span>Calendar</span>
            </div>
            <div
              class="menu menu-appointment"
              :class="{active: activeMenu === MENU_APPOINTMENT}"
              @click="onActive(MENU_APPOINTMENT)"
            >
              <span>Appointments</span>
            </div>
            <div
              class="menu menu-setting"
              :class="{active: activeMenu === MENU_SETTING}"
              @click="onActive(MENU_SETTING)"
            >
              <span>Setting</span>
            </div>
          </div>
        </div>
      </transition>
      <div class="dashboard-board">
        <transition name="fade-anim">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDashboard from "@/components/Header/HeaderDashboard.vue";
import DatePicker from "@/components/DatePicker.vue";
import router from "@/router";

export default {
  name: "Dashboard",
  components: {
    HeaderDashboard,
    DatePicker
  },
  data() {
    return {
      MENU_CALENDAR: 0,
      MENU_APPOINTMENT: 1,
      MENU_SETTING: 2,
      currentDate: new Date(),
      activeMenu: 0,
      sidebarShow: true
    };
  },
  created() {
    window.addEventListener("resize", this.windowChange);
    this.windowChange();
  },
  destroyed() {
    window.removeEventListener("resize", this.windowChange);
  },
  methods: {
    windowChange() {
      const isSmall = window.innerWidth <= 1458;
      this.sidebarShow = !isSmall;

      return isSmall;
    },
    onActive(menu_id) {
      this.activeMenu = menu_id;
      if (this.windowChange()) this.sidebarShow = false;

      switch (menu_id) {
        case this.MENU_CALENDAR:
          this.$router.push("/calendar");
          break;
        case this.MENU_APPOINTMENT:
          this.$router.push("/appointments");
          break;
        case this.MENU_SETTING:
          this.$router.push("/setaccount");
          break;
      }
    },
    sidebarToggle() {
      this.sidebarShow = !this.sidebarShow;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";
@import "~https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#7046ba);

.dashboard {
  overflow: hidden;
  position: relative;

  .dashboard-container {
    display: flex;

    .dashboard-sidebar {
      position: relative;
      width: 375px;
      height: 980px;
      background-image: linear-gradient(
        180deg,
        #673ab7 0%,
        #6f44ba 17%,
        #8560c2 47%,
        #a98dd1 85%,
        #b8a1d7 100%
      );
      padding: 38px 19px 55px 19px;

      @include desktop-md {
        position: absolute;
        z-index: 4;
      }
      @include ipad {
        padding: 38px 24px 0px 21px;
        height: 758px;
      }

      .dashboard-sidebar-head {
        display: flex;

        .dashboard-sidebar-head-left {
          width: 50px;
          height: 50px;
          border: 5px solid #ff9201;
          padding: 3px;

          img {
            width: 29px;
            height: 35px;
          }
        }
        .dashboard-sidebar-head-right {
          margin-left: 12px;
          margin-top: 5px;

          .panel-top {
            .title {
              span {
                color: #ffffff;
                font-family: Avenir-heavy;
                font-size: 20px;
                font-weight: 800;

                @include ipad {
                  font-size: 23px;
                }
              }
            }
            .btn-edit {
              a {
                color: #ffffff;
                font-size: 16px;
                font-weight: 400;
                text-decoration: none;
              }
            }
          }
          .panel-bottom {
            margin-top: 23px;

            a {
              text-decoration: none;
              font-size: 19px;
              font-weight: 900;
              color: white;
            }
          }
        }
      }
      .dashboard-sidebar-body {
        margin-top: 47px;

        @include ipad {
          margin-top: 6px;
        }

        .search {
          input {
            width: 335px;
            height: 59px;
            border-radius: 8px;
            background: url("~@/assets/images/ic_search.png") no-repeat 95% 50%;
            background-size: 32px 32px;
            background-color: #ffffff;
            color: #7046ba;
            font-family: Avenir;
            font-size: 20px;
            font-weight: 400;
            padding: 22px 14px 8px;

            @include ipad {
              width: 335px;
              height: 47px;
              padding: 10px 14px 8px;
              background-size: 24px 23px;
            }
          }
        }
        .date-picker {
          margin-top: 56px;

          @include ipad {
            margin-top: 26px;
          }
        }
      }
      .dashboard-sidebar-foot {
        position: absolute;
        left: 38px;
        bottom: 54px;

        @include ipad {
          left: 22px;
          bottom: 46px;
        }

        .menu {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          height: 28px;
          background-repeat: no-repeat;
          background-position: 0% 50%;
          background-size: 27px 28px;

          &:hover {
            cursor: pointer;
          }
          &.active {
            span {
              color: #6b3fb8;
            }
          }

          span {
            color: #ffffff;
            font-family: Avenir-heavy;
            font-size: 17px;
            font-weight: 800;
            margin-top: 5px;
            margin-left: 39px;
          }

          &.menu-calendar {
            background-image: url("~@/assets/images/ic_calendar.png");

            &.active {
              background-image: url("~@/assets/images/ic_calendar_blue.png");
            }
          }
          &.menu-appointment {
            background-image: url("~@/assets/images/ic_note.png");

            &.active {
              background-image: url("~@/assets/images/ic_note_blue.png");
            }
          }
          &.menu-setting {
            background-image: url("~@/assets/images/ic_setting.png");

            &.active {
              background-image: url("~@/assets/images/ic_setting_blue.png");
            }
          }
        }
      }
    }
    .dashboard-board {
      width: 100%;
    }
  }
}
</style>