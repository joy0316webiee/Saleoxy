<template>
  <div class="appointment">
    <div class="wizard-page-container appointment">
      <div class="wizard-page-head appointment-head">
        <div class="stepper-container">
          <div class="to-back">
            <router-link to="/addcalendar">
              <span class="to-back-icon">
                <img src="@/assets/images/back-icon.png" alt="to-back-icon">
              </span>
            </router-link>
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
        <div class="title">
          <h1>Welcome Onboard!</h1>
          <h2>you’re 1 steps from setting up your workspace</h2>
          <h3>Set Your Availability—Before Someone Books You At Midnight</h3>
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
              <div class="appointment-table-col-no">
                1
              </div>
              <div class="appointment-table-col-start">
                <input type="text" placeholder="09:00 AM">
              </div>
              <div class="appointment-table-col-end">
                <input type="text" placeholder="10:00 AM">
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  TU
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  WE
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  TH
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  FR
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  SA
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appointment-table-col-no">
                2
              </div>
              <div class="appointment-table-col-start">
                <input type="text" placeholder="09:00 AM">
              </div>
              <div class="appointment-table-col-end">
                <input type="text" placeholder="10:00 AM">
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  TU
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  WE
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  TH
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  FR
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  SA
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appointment-table-col-no">
                3
              </div>
              <div class="appointment-table-col-start">
                <input type="text" placeholder="09:00 AM">
              </div>
              <div class="appointment-table-col-end">
                <input type="text" placeholder="10:00 AM">
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  TU
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  WE
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  TH
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  FR
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  SA
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appointment-table-col-no">
                4
              </div>
              <div class="appointment-table-col-start">
                <input type="text" placeholder="09:00 AM">
              </div>
              <div class="appointment-table-col-end">
                <input type="text" placeholder="10:00 AM">
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  TU
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  WE
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  TH
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  FR
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  SA
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
              </div>
              <div class="appointment-table-col-remove">
                <span>x</span>
              </div>
            </div>
            <div class="appointment-table-row">
              <div class="appointment-table-col-no">
                5
              </div>
              <div class="appointment-table-col-start">
                <input type="text" placeholder="09:00 AM">
              </div>
              <div class="appointment-table-col-end">
                <input type="text" placeholder="10:00 AM">
              </div>
              <div class="appointment-table-col-days">
                <span class="day-red">SU</span>
                <span class="day-blue">
                  MO
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  TU
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  WE
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>  
                </span>
                <span class="day-blue">
                  TH
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  FR
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
                </span>
                <span class="day-blue">
                  SA
                  <i><img src="@/assets/images/tick-icon.png" alt="tick-icon"></i>
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
          <button>CONTINUE</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .appointment {
    height: 793px;

    .appointment-head {
      .title {
        padding-top: 31px;

        h2 {
          margin-bottom: 0px;
        }
        h3{
          color: #fe5d89;
          font-size: 25px;
          margin-top: 5px;
          margin-bottom: 15px;
        }
      }
    }
    .appointment-body {
      width: 1104px;
      height: 495px;
      border-radius: 21px;
      border: 5px solid #e9eefe;
      margin: 0 auto;

      .appointment-table {
        .appointment-table-header {
          display: grid;
          grid-template-columns: [first] 136px [line2] 248px [line3] 91px [line4] 571px [end];
          padding-top: 18px;
          padding-left: 11px;

          >div{
            color: #fe5d89;
            font-family: "Source Sans Pro";
            font-size: 25px;
            line-height: 44px;
            background-color: white;
            text-align: center;
          }

          .header-no {
            img {
              width: 48px;
              height: 41px;
            }
          }
          .header-start {

          }
          .header-end {

          }
          .header-days {

          }
        }
        .appointment-table-body {
          height: 334px;
          margin: 0px 18px 0px 28px;
          overflow: auto;
                    
          .appointment-table-row {
            display: grid;
            grid-template-columns: [first] 103px [line2] 283px [line3] 61px [line4] 571px [end];
            justify-items: center;
            border-radius: 47px;
            background-color: #e9eefe;
            position: relative;
            width: 96%;
            padding-top: 11px;
            padding-bottom: 11px;
            margin-bottom: 15px;

            >div {
              align-self: center;
            }

            .appointment-table-col-no {
              color: #fe5d89;
              font-family: Avenir-Black;
              font-size: 18px;
              font-weight: 900;
              line-height: 16px;
            }
            .appointment-table-col-start,
            .appointment-table-col-end {
              input {
                border-radius: 13px;
                border: 4px solid #164bcd;
                background-color: #ffffff;
                color: #fe5d89;
                font-family: Avenir-Medium;
                font-size: 15px;
                line-height: 18px;
                text-transform: uppercase;
                width: 82px;
                height: 52px;
                padding: 5px;
              }
            }

            .appointment-table-col-days {
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding-left: 52px;
              padding-right: 61px;
              
              span {
                position: relative;
                color: #fe5d89;
                font-family: "Source Sans Pro";
                font-size: 15px;
                font-weight: 700;
                line-height: 15px;
                text-transform: uppercase;
                padding: 13px;
                height: 48px;
                width: 48px;
                display: inline-block;
                border-radius: 50%;

                i {
                  position: absolute;
                  right: -5px;
                  top: 0px;
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  background-color: #164bcd;
                  border-radius: 50%;
                  padding: 0px 3px;

                  img {
                    width: 10px;
                    height: 8px;
                  }
                }
              }

              .day-red {
                color: #fe5d89;
                border: 3px solid #fe5d89;
              }
              .day-blue {
                color: #164bcd;
                border: 3px solid #164bcd;
              }
            }
            .appointment-table-col-remove {
              position: absolute;
              right: 0px;
              top: 50%;
              transform: translate(12px, -50%);

              span {
                color: #fe5d89;
                font-family: Avenir-heavy;
                font-size: 19px;
                line-height: 8px;
                width: 27px;
                height: 27px;
                border-radius: 50%;
                border: 2px solid #fe5d89;
                padding: 7px;
                display: inline-block;

                &:hover {
                  color: darken(#fe5d89, 10%);
                  border: 2px solid darken(#fe5d89, 10%);
                  cursor: pointer;
                }
              }
            }
          }

        }
        .appointment-table-footer {
          padding-top: 33px;
          padding-left: 65px;

          span {
            color: #fe5d89;
            font-family: Avenir;
            font-size: 16px;
            font-weight: 900;
            line-height: 7px;
            display: inline-block;
            width: 27px;
            height: 27px;
            border-radius: 17px;
            border: 2px solid #fe5d89;
            padding: 8px 7px;
            
            &:hover {
              color: darken(#fe5d89, 10%);
              border: 2px solid darken(#fe5d89, 10%);
              cursor: pointer;
            }
          }
        }
      }
    }
    .appointment-foot {
      position: absolute;
      right: 64px;
      bottom: 18px;

      button {
        width: 233px;
        height: 70px;
        border-radius: 6px;
        background-color: #164bcd;
        color: #ffffff;
        font-family: Avenir-Black;
        font-size: 31px;
        letter-spacing: 1.12px;
        line-height: 33px;
        text-transform: uppercase;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 13px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #e9eefe;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d3d4fc;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: darken(#d3d4fc, 10);
  }

  ::-webkit-input-placeholder { /* Edge */
    color: #fe5d89;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fe5d89;
  }

  ::placeholder {
    color: #fe5d89;
  }
</style>