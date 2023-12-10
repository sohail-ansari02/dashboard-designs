import { NgModule } from '@angular/core';
import { GlobleStyleComponent } from './globle-style/globle-style.component';
import { BrowserModule } from '@angular/platform-browser';
import { XRayComponent } from './x-ray/x-ray.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [GlobleStyleComponent, XRayComponent, ThemeSwitchComponent],
  imports: [BrowserModule],
  exports: [GlobleStyleComponent, ThemeSwitchComponent],
})
export class GlobleStyleModule {}
