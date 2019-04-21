<template>
  <div class="wizard-page-container complete">
    <div class="wizard-page-head complete-head">
      <div class="stepper-container">
        <div class="to-back">
          <span class="to-back-icon">
            <img src="@/assets/images/back-icon.png" alt="to-back-icon">
          </span>
          <span class="to-back-label">Back</span>
        </div>
        <div class="stepper">
          <div class="stepper-wrapper">
            <span class="circle">1</span>
            <span class="hypen"></span>
            <span class="circle">2</span>
            <span class="hypen"></span>
            <span class="circle">3</span>
          </div>
        </div>
      </div>
      <div class="sale-logo">
        <img src="@/assets/images/saleoxy_logo_blue.png" alt="saleoxy-logo-blue">
      </div>
      <div class="title">
        <h1>Welcome Onboard!</h1>
        <h2>THANK YOU !</h2>
      </div>
    </div>
    <div class="complete-body">
      <div class="complete-body-robot">
        <img src="@/assets/images/robot1.png" alt="robot">
      </div>
      <div class="complete-body-tick">
        <span>
          <img src="@/assets/images/tick-icon.png" alt="tick-icon">
        </span>
      </div>
      <div class="complete-body-desc">
        <p>CLICK START TO RUN YOUR WORKSPACE</p>
      </div>
    </div>
    <div class="complete-foot">
      <button>START</button>
    </div>
  </div>
</template>

<style scope lang="scss">
  .complete {
    .complete-head {
      .sale-logo {
        padding: 46px 434px 0px;

        img {
          width: 398px;
          height: 54px;
        }
      }
      .title {
        padding-top: 61px;

        h1 {
          margin-bottom: 9px;
        }
        h2 {
          margin: 0px;
        }
      }
    }
    .complete-body {
      .complete-body-robot {
        position: absolute;
        top: 172px;
        left: 149px;

        img {
          width: 243px;
          height: 305px;
        }
      }
      .complete-body-tick {
        text-align: center;
        padding-top: 36px;

        span {
          display: inline-block;
          width: 146px;
          height: 146px;
          padding: 34px 20px;
          border-radius: 50%;
          background-color: #164bcd;

          img {
            width: 90px;
            height: 67px;
          }
        }
      }
      .complete-body-desc {
        text-align: center;

        p {
          color: #164bcd;
          font-family: Avenir;
          font-size: 32px;
          font-weight: 800;
          text-transform: uppercase;
          margin: 49px 0px;
        }
      }
    }
    .complete-foot {
      text-align: center;

      button {
        width: 291px;
        height: 86px;
        border-radius: 6px;
        background-color: #164bcd;
        color: #ffffff;
        font-family: Avenir-Black;
        font-size: 39px;
        /* font-weight: 900; */
        letter-spacing: 1.4px;
        line-height: 42px;
        text-transform: uppercase;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>