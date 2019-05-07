<template id="calendar">
  <div class="calendar" :class="{'calendar-popup': isPopup}">
    <header class="header">
      <div class="left-arr" @click="previousMonth"></div>
      <span>{{ currentMonthLabel }} {{ currentYear }}</span>
      <div class="right-arr" @click="nextMonth"></div>
    </header>
    <div
      class="headings"
      v-for="(dayLabel, index) in dayLabels"
      v-bind:key="'dayOfWeek' + index"
    >{{ dayLabel }}</div>
    <div
      v-for="(day, index) in daysArray"
      class="day"
      :class="dayClassObj(day)"
      v-bind:key="'day' + index"
    >
      <button @click="setSelectedDate(day)">{{ day.date | formatDateToDay }}</button>
    </div>
  </div>
</template>

<script>
import dateFns from "date-fns";

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default {
  name: "DatePicker",
  data() {
    return {
      today: null,
      selectedDate: null,
      currDateCursor: null,
      dayLabels: null
    };
  },
  created() {
    this.dayLabels = DAY_LABELS.slice();
    this.today = new Date();
    this.selectedDate = this.today;
    this.currDateCursor = this.today;
  },
  props: {
    startDate: {
      required: false,
      type: Date
    },
    isPopup: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentMonth() {
      return this.currDateCursor.getMonth();
    },
    currentYear() {
      return this.currDateCursor.getFullYear();
    },
    currentMonthLabel() {
      return MONTH_LABELS[this.currentMonth];
    },
    daysArray() {
      const date = this.currDateCursor;
      const startOfMonth = dateFns.startOfMonth(date);
      const endOfMonth = dateFns.endOfMonth(date);
      //const days = dateFns.eachDay(startOfMonth, endOfMonth);

      const days = dateFns.eachDay(startOfMonth, endOfMonth).map(day => ({
        date: day,
        isCurrentMonth: dateFns.isSameMonth(
          new Date(this.currentYear, this.currentMonth),
          day
        ),
        isCurrentWeek: dateFns.isSameWeek(day, this.today),
        isToday: dateFns.isToday(day),
        isSelected: dateFns.isSameDay(this.selectedDate, day)
      }));

      // gen the days from last month
      let previousMonthCursor = dateFns.lastDayOfMonth(
        dateFns.addMonths(date, -1)
      );
      const begIndex = dateFns.getDay(days[0].date);
      for (let i = begIndex; i > 0; i--) {
        days.unshift({
          date: previousMonthCursor,
          isCurrentMonth: false,
          isCurrentWeek: dateFns.isSameWeek(previousMonthCursor, this.today),
          isToday: dateFns.isToday(previousMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor)
        });
        previousMonthCursor = dateFns.addDays(previousMonthCursor, -1);
      }

      // gen days for next month
      const daysNeededAtEnd = days.length % 7 > 0 ? 7 - (days.length % 7) : 0;
      let nextMonthCursor = dateFns.addMonths(date, 1);
      nextMonthCursor = dateFns.setDate(nextMonthCursor, 1);
      for (let x = 1; x <= daysNeededAtEnd; x++) {
        days.push({
          date: nextMonthCursor,
          isCurrentMonth: false,
          isCurrentWeek: dateFns.isSameWeek(nextMonthCursor, this.today),
          isToday: dateFns.isToday(nextMonthCursor),
          isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor)
        });
        nextMonthCursor = dateFns.addDays(nextMonthCursor, 1);
      }
      return days;
    }
  },
  mounted() {
    if (this.startDate) {
      this.currDateCursor = this.startDate;
      this.selectedDate = this.startDate;
    }
  },
  methods: {
    dayClassObj(day) {
      return {
        today: day.isToday,
        currentMonth: day.isCurrentMonth,
        currentWeek: day.isCurrentWeek,
        selected: day.isSelected
      };
    },
    nextMonth() {
      this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1);
    },
    previousMonth() {
      this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1);
    },
    setSelectedDate(day) {
      this.selectedDate = day.date;
      this.$emit("input", this.selectedDate);
    }
  },
  filters: {
    formatDateToDay(val) {
      return dateFns.format(val, "D");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 322px;

  @include ipad {
    width: 300px;
    margin: 0 auto;
  }

  > .header {
    padding: 0.75rem;
    font-size: 1.25rem;
    grid-column: 1 / span 7;

    .left-arr {
      background-image: url("~@/assets/images/arr_left_yellow.png");
    }
    .right-arr {
      background-image: url("~@/assets/images/arr_right_yellow.png");
    }
    > div {
      width: 8px;
      height: 12px;
      background-size: contain;

      &:hover {
        cursor: pointer;
      }
    }
    > span {
      flex: 1;
      text-align: center;
      color: #ffffff;
      font-family: Avenir-heavy;
      font-size: 20px;
      font-weight: 800;
    }
  }

  > * {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  > .headings {
    color: #ff9201;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  > .day {
    &.selected {
      border: 1px solid white;
    }
    &.currentMonth {
      button {
        color: #fdfdfd;
      }
    }
    &.currentWeek {
      background-color: #ff9201;
    }
    &.today {
      button {
        color: #6b3fb8;
      }
    }
    &::before {
      content: "";
      display: inline-block;
      height: 0;
      padding-bottom: 100%;
      width: 1px;
    }

    button {
      color: inherit;
      background: transparent;
      border: none;
      height: 100%;
      width: 100%;
      color: rgba(253, 253, 253, 0.5);
      font-family: Avenir-Black;
      font-size: 13px;
      font-weight: 900;
    }
  }

  &.calendar-popup {
    width: 269px;
    height: 269px;

    > .header {
      > span {
        font-size: 16px;
      }
    }
    .headings {
      font-size: 13px;
    }
    .day {
      button {
        font-size: 10px;
      }
    }
  }
}

.text-center {
  text-align: center;
}
</style>