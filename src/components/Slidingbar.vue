<template>
  <div class="slidingbar">
    <div class="slidingbar-head">
      <div class="btn-action" :class="{'btn-edit' : isEdit}"></div>
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="btn-close" @click="onClose">
        <img src="@/assets/images/ic_close.png" alt="icon-close-yellow">
      </div>
    </div>
    <div class="slidingbar-body">
      <div class="appointment-type">
        <div class="title">
          <img src="@/assets/images/ic_appointment_yellow.png">
          <span>Appointment Type</span>
        </div>
        <div class="form-ctrl">
          <select>
            <option>Best Doctor official page</option>
            <option>Patient</option>
            <option>Doctor</option>
          </select>
        </div>
      </div>
      <div class="client-name">
        <div class="title">
          <img src="@/assets/images/ic_user_yellow.png">
          <span>Client Name</span>
        </div>
        <div class="form-ctrl">
          <input type="text" placeholder="John smith">
        </div>
      </div>
      <div class="date">
        <div class="title">
          <img src="@/assets/images/ic_date_yellow.png">
          <span>Date</span>
        </div>
        <div class="form-ctrl">
          <input type="tel" v-mask="'##/##/####'" placeholder="Ex: mm/dd/yyyy">
        </div>
      </div>
      <div class="time">
        <div class="title">
          <img src="@/assets/images/ic_clock_yellow.png">
          <span>Time</span>
        </div>
        <div class="form-ctrl">
          <label>
            Starts:
            <input type="tel" v-mask="'##:##'" placeholder="Ex: 14:00pm">
          </label>
          <label>
            Ends:
            <input type="tel" v-mask="'##:##'" placeholder="Ex: 15:00pm">
          </label>
        </div>
      </div>
      <div class="phone">
        <div class="title">
          <img src="@/assets/images/ic_phone_yellow.png">
          <span>Phone Number</span>
        </div>
        <div class="form-ctrl">
          <input type="tel" v-mask="'+## ### ### ###'" placeholder="+44 123 421 344">
        </div>
      </div>
      <div class="note">
        <div class="title">
          <img src="@/assets/images/ic_note_yellow.png">
          <span>Note</span>
        </div>
        <div class="form-ctrl">
          <textarea placeholder="Private Notes about appointment…"></textarea>
        </div>
      </div>
      <div class="btn-apply">
        <button>APPLY</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "Slidingbar",
  props: {
    onClose: Function,
    isEdit: Boolean
  },
  computed: {
    title() {
      return this.isEdit ? "Update Appointment" : "New Appointment";
    }
  },
  directives: { mask }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#707070);

.slidingbar {
  position: absolute;
  right: 0px;
  top: 101px;
  height: 979px;
  width: 411px;
  background-color: #e9eefe;
  z-index: 3;

  @include ipad {
    width: 375px;
    height: 758px;
    top: 66px;
  }

  .slidingbar-head {
    height: 78px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    background-color: #ff9201;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    @include ipad {
      height: 58px;
      justify-content: left;
    }

    .btn-action {
      width: 30px;
      height: 30px;
      background-image: url("~@/assets/images/ic_add.png");
      background-repeat: no-repeat;
      background-size: 30px 30px;

      @include ipad {
        width: 18px;
        height: 18px;
        background-size: 18px 18px;
        order: 2;
        margin-left: 57px;
      }

      &.btn-edit {
        width: 36px;
        height: 28px;
        background-image: url("~@/assets/images/ic_update.png");
        background-size: 36px 28px;

        @include ipad {
          width: 20px;
          height: 15px;
          background-size: contain;
        }
      }
    }
    .title {
      margin-right: 50px;

      @include ipad {
        order: 3;
        margin-left: 7px;
        margin-top: 4px;
      }

      span {
        color: #ffffff;
        font-family: Avenir-heavy;
        font-size: 23px;
        font-weight: 800;

        @include ipad {
          font-size: 16px;
        }
      }
    }
    .btn-close {
      @include ipad {
        order: 1;
      }
      &:hover {
        cursor: pointer;
      }

      img {
        width: 20px;
        height: 20px;

        @include ipad {
          width: 26px;
          height: 26px;
          display: block;
          background: url("~@/assets/images/ic_back_yellow.png") no-repeat;
          background-size: contain;
          padding-left: 26px;
        }
      }
    }
  }
  .slidingbar-body {
    padding: 29px 22px 0px;

    @include ipad {
      padding: 20px 16px 0px;
    }

    > div {
      margin-bottom: 26px;

      &.appointment-type {
        @include ipad {
          margin-bottom: 21px;
        }

        .form-ctrl {
          overflow: hidden;
          background: #ffffff url("~@/assets/images/arr_down_yellow.png")
            no-repeat 97% 50%;
          background-size: 22px 12px;
          border: 1px solid #ff9201;

          @include ipad {
            width: 342px;
            height: 32px;
            border-radius: 4px;
          }

          select {
            padding: 11px 9px;
            width: 100%;
            border: none;
            box-shadow: none;
            background: transparent;
            background-image: none;
            -webkit-appearance: none;
            font-family: Avenir-medium;
            font-size: 17px;
            font-weight: 500;

            @include ipad {
              font-size: 12px;
              padding: 8px;
            }
          }
        }
      }
      &.time {
        .form-ctrl {
          width: 366px;
          height: 44px;
          padding: 10px 9px;
          border-radius: 4px;
          border: 1px solid #ff9201;
          background-color: #ffffff;
          display: flex;

          @include ipad {
            width: 342px;
            height: 32px;
            padding: 7px 0px 9px 6px;
          }

          label {
            color: #000000;
            font-family: Avenir-medium;
            font-size: 17px;
            font-weight: 500;
            margin-right: 26px;

            @include ipad {
              font-size: 12px;
              margin-right: 24px;
            }

            input {
              width: 92px;
              height: 24px;
              padding: 0px;
              color: #707070;
              font-family: Avenir-light;
              font-size: 17px;
              font-weight: 300;
              border: none;
              background-color: transparent;

              @include ipad {
                width: 65px;
                height: 17px;
                font-size: 12px;
                margin-left: 30px;
              }
            }
          }
        }
      }
      &.note {
        margin-bottom: 35px;
      }
      &.btn-apply {
        text-align: right;
        margin-bottom: 0px;

        button {
          width: 179px;
          height: 46px;
          border-radius: 4px;
          background-color: #ff9201;
          color: #ffffff;
          font-family: Avenir-heavy;
          font-size: 23px;
          font-weight: 800;
          text-transform: uppercase;

          @include ipad {
            width: 131px;
            height: 35px;
            font-size: 18px;
          }
        }
      }

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        @include ipad {
          margin-bottom: 8px;
        }

        img {
          width: 30px;
          height: 30px;

          @include ipad {
            width: 22px;
            height: 22px;
          }
        }
        span {
          color: #ff9201;
          font-family: Avenir-heavy;
          font-size: 19px;
          font-weight: 800;
          margin-top: 6px;
          margin-left: 12px;

          @include ipad {
            font-size: 13px;
            margin-left: 8px;
          }
        }
      }
      .form-ctrl {
        input {
          width: 366px;
          height: 44px;
          padding: 11px 9px;
          border-radius: 4px;
          border: 1px solid #ff9201;
          font-family: Avenir-medium;
          font-size: 17px;
          font-weight: 500;

          @include ipad {
            width: 342px;
            height: 32px;
            font-size: 12px;
            padding: 8px;
          }
        }
        textarea {
          font-family: Avenir-medium;
          font-size: 15px;
          font-weight: 500;
          width: 366px;
          height: 166px;
          padding: 16px 9px;
          border-radius: 4px;
          border: 1px solid #ff9201;
          background-color: #ffffff;
          resize: none;

          @include ipad {
            width: 342px;
            height: 122px;
            font-size: 10px;
            padding: 12px 6px;
          }
        }
      }
    }
  }
}
</style>