<template>
  <div class="box">
    <canvas id="consommation-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import generateChartData from './chart-data.js';
import {getData} from './graph-model.ts';
import {format} from 'date-fns';


export default {
  props: {
    dates: { type: Object, required: true },
  },
  data() {
    return {
      chartData: {},
      values: [],
      labels: [],
      chart: null
    }
  },
  watch: {
    async dates(newDate, oldDate) {
      const data = await getData(newDate);

      console.log('data from firebase:', {data});

      const labels = Object.keys(data).reduce((acc, current) => {
        const date = format(new Date(current), newDate.format);
        acc.push(date);
        return acc;
      }, []);

      const values = Object.values(data);

      this.values = values;
      this.labels = labels;
    },

    values(newValues, _) {
      this.chartData = generateChartData(this.labels, this.values);

      if (!this.chart) {
        const ctx = document.getElementById('consommation-chart');

        const myChart = new Chart(ctx, {
          type: this.chartData.type,
          data: this.chartData.data,
          options: this.chartData.options,
        });

        this.chart = myChart;
      } else {
        this.chart.data.labels = this.labels;
        this.chart.data.datasets[0].data = this.values;
        this.chart.update();

        console.log('update of chartData', this.labels, this.values);
      }

    }
  },
}
</script>
