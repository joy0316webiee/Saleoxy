<template>
  <div class="page-container facebook">
    <div class="page-head facebook-head">
      <div class="stepper-container">
        <div class="to-back">
          <router-link to="/setaccount">
            <span class="to-back-icon">
              <img src="@/assets/images/ic_back.png" alt="to-back-icon">
            </span>
          </router-link>
          <span class="to-back-label">Cancel</span>
        </div>
      </div>
    </div>
    <div class="facebook-body">
      <FacebookDesc :forUpdate="true"/>
      <FacebookEdit :forUpdate="true"/>
    </div>
    <div class="facebook-foot">
      <div class="btn-continue">
        <router-link to="/setaccount">
          <button class="btn-blue">Update</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookDesc from "@/components/Facebook/FacebookDesc.vue";
import FacebookEdit from "@/components/Facebook/FacebookEdit.vue";

export default {
  name: "SettingFacebook",
  components: {
    FacebookDesc,
    FacebookEdit
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.facebook {
  width: 1282px !important;
  height: 738px !important;
  margin-top: 108px !important;

  @include desktop-md-fa {
    width: 900px !important;
    height: 553px !important;
  }
  @include tablet {
    width: 650px !important;
    height: 634px !important;
  }
  @include ipad {
    width: 399px !important;
    height: 613px !important;
    padding: 0px 27px;
    margin-top: 70px !important;
  }
  @include iphone {
    width: 326px !important;
    padding: 0px;
  }

  .facebook-head {
    .stepper-container {
      .to-back {
        top: 34px;
        left: 24px;

        @include ipad {
          top: 16px;
          left: 16px;
        }
      }
    }
  }
  .facebook-body {
    padding-top: 103px;
    padding-left: 200px;

    @include desktop-md-fa {
      padding-top: 90px;
      padding-left: 69px;
    }
    @include tablet {
      padding-left: 52px;
    }
    @include ipad {
      padding-left: 25px;
      padding-top: 69px;
    }
  }
  .facebook-foot {
    .btn-continue {
      position: absolute;
      right: 64px;
      bottom: 24px;

      @include desktop-md-fa {
        right: 40px;
        bottom: 24px;
      }
      @include ipad {
        right: 16px;
        bottom: 24px;
      }

      button {
        width: 233px;
        height: 70px;
        font-size: 31px;
        letter-spacing: 1.12px;
        line-height: 33px;

        @include desktop-md-fa {
          width: 170px;
          height: 50px;
          font-size: 25px;
        }
        @include ipad {
          width: 109px;
          height: 33px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>