import * as Highcharts from 'highcharts';
Highcharts.setOptions({
  credits: {
    enabled: false,
  },
  lang: {
    thousandsSep: ',',
  },
  chart: {
    plotBackgroundColor: 'var(--clr-surface)',
    backgroundColor: 'var(--clr-surface)',
    spacingTop: -43,
  },
  title: {
    style: {
      color: 'var(--clr-primary)',
    },
    align: 'left',
    y: 60,
  },
  xAxis: {
    lineColor: 'var(--clr-neutral)',
    labels: {
      style: {
        color: 'var(--clr-neutral)',
      },
    },
    gridLineColor: 'var(--clr-neutral)',
  },
  yAxis: {
    lineColor: 'var(--clr-neutral)',
    labels: {
      style: {
        color: 'var(--clr-neutral)',
      },
    },
    gridLineColor: 'var(--clr-neutral)',
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
  },
  tooltip: {
    followPointer: true,
    shape: 'callout',
    backgroundColor: 'var(--clr-primary)',
    borderRadius: 20,
    borderWidth: 0,
    style: {
      color: 'var(--clr-background)',
      padding: '0'
    },
  },
  plotOptions: {
    column: {
      borderWidth: 0,
    },
    series: {
      states: {
        inactive: {
          opacity: 1,
        },
      },
    },

  },
});

export const defaultHighChart: typeof Highcharts = Highcharts;
