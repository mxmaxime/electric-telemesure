<template>
  <div class="l-stack-large">
    <div class="l-container l-stack">
      <div class="form">
        <select v-model="dateFilterSelected" class="h4" name="" id="">
          <option v-for="choice, index in this.dateFilters" v-bind:value="choice" :key="index">{{ choice.choiceName }}</option>
        </select>
      </div>
      <p>{{ this.dateFilterInformation }}</p>
    </div>

    <div class="l-container">
        <div class="stats box--rounded">
          <stat title="Total Consumption" :number="100" unity="kw" :evolution="12" />
          <stat title="Total Consumption" :number="100" unity="kw" />
          <stat title="Total Consumption" :number="100" unity="kw" />
        </div>
    </div>
  </div>
</template>
<script>
import Stat from './Stat'
import {format} from 'date-fns'
import {getDays, getLastMonthBoundaries, getLastWeekBoundaries} from './common-dates'

export default {
  components: {
    Stat
  },
  computed: {
    dateFilterInformation: function() {
    const dateFormat = "eeee dd MMMM"
    const {dates} = this.dateFilterSelected

    return `${format(dates.firstDate, dateFormat)} - ${format(dates.lastDate, dateFormat)}`
    }
  },
  data() {
    const dateFilters = {
      LAST_MONTH: {
        choiceName: 'Last month',
        dateFilterInformation: 'computedDays',
        dates: getLastMonthBoundaries(),
        xAxis: getDays()
      },
      LAST_WEEK: {
        choiceName: 'Last week',
        dateFilterInformation: 'computedDays',
        dates: getLastWeekBoundaries(),
        xAxis: getDays()
      },
      LAST_DAY: {
        choiceName: 'Last day',
        dateFilterInformation: 'computedHours',
        xAxis: this.getHours
      },
      LAST_YEAR: {
        choiceName: 'Last year',
        dateFilterInformation: 'computedHours',
        xAxis: this.getHours
      }
    }

    return {
      dateFilterSelected: dateFilters.LAST_MONTH,
      dateFilters
    }
  },

  methods: {
    graphXAxis() {

    }
  }
}
</script>
<style lang="scss">
@import "~/assets/css/helpers/_space.scss";
@import "~/assets/css/helpers/_colors.scss";

.stats {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(8);
}

.stats__item:not(:last-child) {
  border-right: 1px solid var(--border);
}

.stats__title {
  font-weight: 500;
  font-size: 1.05rem;
}

.stats__number {
  font-weight: 600;
  font-size: 1.75em;
}

.stats__indiactor {
  background-color: color('green', 'lightest');
  color: color('green', 'darkest');
  border-radius: 12px;
  padding: 2px space(1);
}
</style>
