import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobleStyleModule } from 'projects/globle-style/src/public-api';
import { CoreModule } from './core/core.module';
import { TestComponent } from './test/test.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, GlobleStyleModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
