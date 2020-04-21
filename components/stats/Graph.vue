<template>
  <div class="box">
    <canvas id="consommation-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from './chart-data.js'

export default {
  data() {
    return {
      chartData
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart('consommation-chart', this.chartData)
  }
}
</script>
