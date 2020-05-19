<template>
  <div class="l-stack-large">
    <div class="l-stack-separated">
      <stats :onDateRangeChange="handleDateRangeChange" />

      <main class="l-container">
        <graph v-if="dates" :dates="dates" />
      </main>
    </div>
  </div>
</template>

<script>
import Stats from '~/components/stats/Stats';
import Graph from '~/components/stats/Graph';


export default {
  components: {
    Stats, Graph
  },

  data() {
    return {
      dates: null
    }
  },

  methods: {
    handleDateRangeChange(dates) {
      this.dates = dates;
    }
  }
}
</script>
