const chart = (labels, values) => ({
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      { // one line graph
        label: 'Consumption (kW)',
        data: values,
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
});

export default chart;
