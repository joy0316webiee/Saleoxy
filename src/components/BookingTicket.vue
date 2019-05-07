<template>
  <div class="booking-ticket">
    <div class="booking-dropdown" v-click-outside="hide">
      <div class="dropdown-toggle" @click="toggle()">
        <img src="@/assets/images/arr_down.png" alt="arrow-down">
      </div>
      <div class="dropdown-menu" v-show="opened">
        <div class="dropdown-menu-delete" @click="onDelete()">
          <span>Delete</span>
        </div>
        <div class="dropdown-menu-update" @click="onUpdate()">
          <span>Update</span>
        </div>
      </div>
    </div>
    <div class="booking-header">
      <span>Patient # 123</span>
    </div>
    <div class="booking-body">
      <span>Service #3</span>
      <span>Service #5</span>
      <span>Service #6</span>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "BookingTicket",
  data() {
    return {
      opened: false
    };
  },
  props: {
    onDelete: Function,
    onUpdate: Function
  },
  methods: {
    toggle() {
      this.opened = true;
    },
    hide() {
      this.opened = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.booking-ticket {
  position: absolute;
  width: 96%;
  height: 144px;
  background-color: #3b86ff;
  border-left: 4px solid #ff9201;
  z-index: 1;

  .booking-dropdown {
    position: relative;

    .dropdown-toggle {
      position: absolute;
      top: 5px;
      right: 5px;

      &:hover {
        cursor: pointer;
      }

      img {
        width: 22px;
      }
    }
    .dropdown-menu {
      width: 63px;
      position: absolute;
      top: 21px;
      right: 6px;
      border-radius: 4px;
      background-color: #ffffff;

      &:hover {
        cursor: pointer;
      }

      .dropdown-menu-delete {
        height: 25px;
        text-align: center;
        border-radius: 4px 4px 0px 0px;
        padding: 3px 0px;

        &:hover {
          background-color: darken(white, 5%);
        }

        span {
          color: #3b86ff;
          font-family: "Open Sans";
          font-size: 13px;
          font-weight: 600;
        }
      }
      .dropdown-menu-update {
        height: 26px;
        border-radius: 0 0 4px 4px;
        background-color: #3b86ff;
        opacity: 0.6;
        text-align: center;
        padding: 4px 0px;

        &:hover {
          background-color: darken(#3b86ff, 5%);
        }

        span {
          color: #ffffff;
          font-family: "Open Sans";
          font-size: 13px;
          font-weight: 600;
        }
      }
    }
  }
  .booking-header {
    margin-left: 18px;
    margin-top: 22px;

    span {
      color: #ffffff;
      font-family: "Open Sans";
      font-size: 13px;
      font-weight: 600;
    }
  }
  .booking-body {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    margin-top: 5px;

    span {
      color: #ffffff;
      font-family: "Open Sans";
      font-size: 13px;
      font-weight: 400;
      padding: 2px 0px;
    }
  }
}
</style>