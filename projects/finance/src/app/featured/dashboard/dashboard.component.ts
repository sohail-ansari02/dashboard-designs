import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { analytics } from './charts/analytics';
import { defaultHighChart } from './charts/defaultHightChartsOption';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  gap = '23px';

  Highcharts: typeof Highcharts = defaultHighChart;
  chartOption: { [key: string]: Highcharts.Options } = {
    analytics,
  };

  constructor() {}

  ngOnInit(): void {
    this.chartOption['analytics'].series = [
      {
        name: 'Income',
        data: [
          4500, 7200, 3100, 6500, 8200, 7500, 5800, 3900, 9400, 8700, 6800,
          7300,
        ],
        type: 'column',
        color: 'var(--clr-primary)',
      },
      {
        name: 'Expenses',
        data: [
          2100, 5300, 4200, 7800, 6200, 5500, 3200, 1800, 7900, 8900, 6400,
          5700,
        ],
        type: 'column',
        color: 'var(--clr-secondary)',
      },
    ];
  }
}
