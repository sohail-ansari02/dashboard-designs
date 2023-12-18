import * as Highcharts from 'highcharts';

export const analytics: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: { text: 'Activity' },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: '',
    },
    max: 10000,
    labels: {
      formatter: function () {
        return `${this.value / 1000}K`;
      },
    },
    tickAmount: 5,
    gridLineDashStyle: 'LongDash',
    gridLineWidth: 1,
  },
  plotOptions: {
    column: {
      pointWidth: 12,
    },
  },

  tooltip: {
    formatter: function () {
      return '$' + this.point.y;
    },
  },

  legend: {
    useHTML: true,
    title: {
      text: '',
    },
  },
};
