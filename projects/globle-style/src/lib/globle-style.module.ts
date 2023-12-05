import { NgModule } from '@angular/core';
import { GlobleStyleComponent } from './globle-style/globle-style.component';
import { BrowserModule } from '@angular/platform-browser';
import { XRayComponent } from './x-ray/x-ray.component';

@NgModule({
  declarations: [GlobleStyleComponent, XRayComponent],
  imports: [BrowserModule],
  exports: [GlobleStyleComponent],
})
export class GlobleStyleModule {}
