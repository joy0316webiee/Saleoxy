<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-header" id="modalTitle">
          <span>!</span>
        </div>
        <div class="modal-body" id="modalDescription">
          <p>
            Are you sure you want to delete
            this appointment?
          </p>
        </div>
        <div class="modal-footer">
          <button type="button">Yes</button>
          <button type="button" @click="close" aria-label="Close modal">Cancel</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalBox",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.15s ease;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(190px, 0px);

  @include desktop-md {
    transform: none;
  }

  .modal {
    background: #ffffff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 385px;
    height: 175px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    border: 1px solid #ff9201;
    background-color: #ffffff;

    @include ipad {
      width: 243px;
      height: 110px;
    }

    .modal-header {
      margin-top: 11px;

      @include ipad {
        margin-top: 7px;
      }

      span {
        width: 43px;
        height: 44px;
        display: inline-block;
        border: 3px solid #ff9201;
        border-radius: 50%;
        font-size: 30px;
        font-weight: 900;
        color: #ff9201;
        padding: 3px;

        @include ipad {
          width: 27px;
          height: 28px;
          font-size: 20px;
        }
      }
    }
    .modal-body {
      padding: 0px 65px;
      margin-top: 9px;

      @include ipad {
        margin-top: 5px;
        padding: 0px 55px;
      }

      p {
        color: #707070;
        font-family: Avenir-medium;
        font-size: 17px;
        font-weight: 500;
        margin: 0px;

        @include ipad {
          font-size: 9px;
        }
      }
    }
    .modal-footer {
      margin-top: 19px;

      @include ipad {
        margin-top: 16px;
      }

      button {
        width: 77px;
        height: 32px;
        border-radius: 4px;
        background-color: #ff9201;
        color: #ffffff;
        font-family: Avenir-medium;
        font-size: 17px;
        font-weight: 500;
        margin: 0px 15px;

        @include ipad {
          width: 49px;
          height: 21px;
          margin: 0px 9px;
          font-size: 9px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>