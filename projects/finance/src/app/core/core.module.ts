import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { SideNavBtnComponent } from './components/side-nav-btn/side-nav-btn.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileSwitchComponent } from './components/profile-switch/profile-switch.component';
import { ProfileOptionComponent } from './components/profile-option/profile-option.component';
import { GlobleStyleModule } from 'projects/globle-style/src/public-api';

@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopBarComponent,
    SideNavBtnComponent,
    ProfileSwitchComponent,
    ProfileOptionComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, GlobleStyleModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
