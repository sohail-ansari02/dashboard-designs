import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconComponent } from './icon/icon.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    IconComponent,
    HighchartsChartModule
  ]
})
export class SharedModule { }
