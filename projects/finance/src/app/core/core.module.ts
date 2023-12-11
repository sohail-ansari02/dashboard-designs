import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppBarComponent } from './app-bar/app-bar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
