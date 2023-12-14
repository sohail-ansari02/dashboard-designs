import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    IconComponent
  ]
})
export class SharedModule { }
