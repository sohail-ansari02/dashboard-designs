import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { SideNavBtnComponent } from './components/side-nav-btn/side-nav-btn.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopBarComponent,
    SideNavBtnComponent,
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
