import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
