<template>
  <div class="l-stack-large">
    <div class="l-container l-stack">
      <div class="stats-form">

        <div>
          <label for="last">Last</label>
          <input id="last" v-model="isLast" type="checkbox" />
        </div>

        <div>
          <select v-model="dateFilterSelected" class="h4" name="" id="">
            <option v-for="choice, index in this.dateFilters" v-bind:value="choice" :key="index">{{ choice[isLast ? 'last' : 'current'].choiceName }}</option>
          </select>
        </div>
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

<script lang="ts">
import Vue from 'vue'
import Stat from './Stat.vue'
import {format} from 'date-fns'
import {dateFilters, DateFilter} from '@/components/date-filters/date-filter'
import {FilterType} from '@/components/date-filters/common-dates'

export default Vue.extend({
  props: {
    onDateRangeChange: { type: Function, required: true },
  },
  components: {
    Stat
  },
  computed: {
    currentDateFilterSelected() {
      // @ts-ignore
      const dates = this.dateFilterSelected[this.isLast ? 'last' : 'current'];

      // @ts-ignore
      this.onDateRangeChange(dates);

      return dates;
    },

    dateFilterInformation: function() {
      // @ts-ignore
      const {dates, format: dateFormat} = this.currentDateFilterSelected

      return `${format(dates.firstDate, dateFormat)} - ${format(dates.lastDate, dateFormat)}`
    },
  },
  data() {
    return {
      isLast: false,
      dateFilterSelected: dateFilters[FilterType.MONTH],
      dateFilters
    }
  },

  methods: {
    graphXAxis() {

    }
  }
})

</script>
<style lang="scss">
@import "~/assets/css/helpers/_space.scss";
@import "~/assets/css/helpers/_colors.scss";

.stats-form {
  display: flex;
  align-items: center;
  > * {
    margin-right: calc(3 * var(--space));
  }
}

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
