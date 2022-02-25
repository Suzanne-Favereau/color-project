import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonOverviewExampleComponent} from './button-overview-example/button-overview-example.component';
import {MatDividerModule} from '@angular/material/divider';
import {MaterialConfigurationModule} from './shared/material-configuration.module';
import {ThemeSwitchComponent} from './theme-switch/theme-switch.component';
import {AutocompleteFilterExampleComponent} from './autocomplete-filter-example/autocomplete-filter-example.component';
import {ChipsInputExampleComponent} from './chips-input-example/chips-input-example.component';
import {DatepickerOverviewExampleComponent} from './datepicker-overview-example/datepicker-overview-example.component';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './dialog-overview-example/dialog-overview-example.component';
import {PaginatorOverviewExampleComponent} from './paginator-overview-example/paginator-overview-example.component';
import {TabGroupBasicExampleComponent} from './tab-group-basic-example/tab-group-basic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonOverviewExampleComponent,
    ThemeSwitchComponent,
    AutocompleteFilterExampleComponent,
    ChipsInputExampleComponent,
    DatepickerOverviewExampleComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    PaginatorOverviewExampleComponent,
    TabGroupBasicExampleComponent
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
