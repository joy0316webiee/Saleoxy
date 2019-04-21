<template>
  <div class="appointment">
    <!-- <h1>Appointment</h1>
    <router-link to="/addcalendar">&lt;Prev</router-link>
    <router-link to="/complete">Next&gt;</router-link> -->
    <div class="wizard-page-container appointment">
      <div class="wizard-page-head appointment-head">
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
        <div class="title">
          <h1>Welcome Onboard!</h1>
          <h2>you’re 1 steps from setting up your workspace</h2>
          <h3>Set Your Availability—Before Someone Books You At Midnight</h3>
        </div>
      </div>
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
          <div class="appintment-table-row">
            <div class="appintment-table-col-no">
              1
            </div>
            <div class="appintment-table-col-start">
              <input type="time">
            </div>
            <div class="appintment-table-col-end">
              <input type="time">
            </div>
            <div class="appintment-table-col-days">
              <span class="day-red">SU</span>
              <span class="day-blue">MO</span>
              <span class="day-blue">TU</span>
              <span class="day-blue">WE</span>
              <span class="day-blue">TH</span>
              <span class="day-blue">FR</span>
              <span class="day-blue">SA</span>
            </div>
            <div class="appintment-table-col-remove">
              <span>x</span>
            </div>
          </div>
          <div class="appintment-table-row">
            <div class="appintment-table-col-no">
              2
            </div>
            <div class="appintment-table-col-start">
              <input type="time">
            </div>
            <div class="appintment-table-col-end">
              <input type="time">
            </div>
            <div class="appintment-table-col-days">
              <span class="sunday">SU</span>
              <span class="monday">MO</span>
              <span class="tuesday">TU</span>
              <span class="wednesday">WE</span>
              <span class="thursday">TH</span>
              <span class="friday">FR</span>
              <span class="saturday">SA</span>
            </div>
            <div class="appintment-table-col-remove">
              <span>x</span>
            </div>
          </div>
          <div class="appintment-table-row">
            <div class="appintment-table-col-no">
              3
            </div>
            <div class="appintment-table-col-start">
              <input type="time">
            </div>
            <div class="appintment-table-col-end">
              <input type="time">
            </div>
            <div class="appintment-table-col-days">
              <span class="sunday">SU</span>
              <span class="monday">MO</span>
              <span class="tuesday">TU</span>
              <span class="wednesday">WE</span>
              <span class="thursday">TH</span>
              <span class="friday">FR</span>
              <span class="saturday">SA</span>
            </div>
            <div class="appintment-table-col-remove">
              <span>x</span>
            </div>
          </div>
          <div class="appintment-table-row">
            <div class="appintment-table-col-no">
              4
            </div>
            <div class="appintment-table-col-start">
              <input type="time">
            </div>
            <div class="appintment-table-col-end">
              <input type="time">
            </div>
            <div class="appintment-table-col-days">
              <span class="sunday">SU</span>
              <span class="monday">MO</span>
              <span class="tuesday">TU</span>
              <span class="wednesday">WE</span>
              <span class="thursday">TH</span>
              <span class="friday">FR</span>
              <span class="saturday">SA</span>
            </div>
            <div class="appintment-table-col-remove">
              <span>x</span>
            </div>
          </div>
          <div class="appintment-table-row">
            <div class="appintment-table-col-no">
              5
            </div>
            <div class="appintment-table-col-start">
              <input type="time">
            </div>
            <div class="appintment-table-col-end">
              <input type="time">
            </div>
            <div class="appintment-table-col-days">
              <span class="sunday">SU</span>
              <span class="monday">MO</span>
              <span class="tuesday">TU</span>
              <span class="wednesday">WE</span>
              <span class="thursday">TH</span>
              <span class="friday">FR</span>
              <span class="saturday">SA</span>
            </div>
            <div class="appintment-table-col-remove">
              <span>x</span>
            </div>
          </div>
        </div>
        <div class="appointment-table-footer">
          <span>+</span>
        </div>
      </div>
      <div class="appointment-foot">
        <button>CONTINUE</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .appintment {
    .appintment-head {
      .title {
        h2 {

        }
        h3{

        }
      }
    }
    .appintment-table {
      .appintment-table-header {
        .header-no {
          
        }
        .header-start {

        }
        .header-end {

        }
        .header-days {

        }
      }
      .appintment-table-body {
        .appintment-table-row {
          .appintment-table-col-no {
          }
          .appintment-table-col-start {
            input {

            }
          }
          .appintment-table-col-end {
            input {

            }
          }
          .appintment-table-col-days {
            .day-red {

            }
            .day-blue {

            }
          }
          .appintment-table-col-remove {
            span {

            }
          }
        }

      }
      .appintment-table-footer {
        span {

        }
      }
    }
    .appintment-foot {
      button {
        
      }
    }
  }
</style>