import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonOverviewExampleComponent} from './button-overview-example/button-overview-example.component';
import {MatDividerModule} from '@angular/material/divider';
import {MaterialConfigurationModule} from './shared/material-configuration.module';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonOverviewExampleComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MaterialConfigurationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
