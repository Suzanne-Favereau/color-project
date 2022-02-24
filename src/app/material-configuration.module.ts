import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule,} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

const materialModules = [
  MatButtonModule, MatToolbarModule, MatSelectModule, MatProgressBarModule,
  MatSnackBarModule, MatListModule, MatIconModule, MatInputModule, MatTableModule, MatSortModule,
  MatDialogModule, MatPaginatorModule, MatTabsModule, MatSidenavModule, MatCardModule, MatTooltipModule, MatCheckboxModule,
  MatExpansionModule, MatDatepickerModule, MatGridListModule, MatAutocompleteModule, MatMenuModule, MatProgressSpinnerModule,
  MatBadgeModule, MatChipsModule, MatSlideToggleModule, MatButtonToggleModule, MatStepperModule, MatRippleModule,
  DragDropModule, MatTreeModule, CdkTreeModule, MatRadioModule
];

const sharedAngularModules = [
  ReactiveFormsModule,
  FormsModule,
];

const formFieldAppearance: MatFormFieldDefaultOptions = {
  appearance: 'standard'
};

@NgModule({
  imports: [
    CommonModule,
    MatNativeDateModule,
    ...materialModules,
    ...sharedAngularModules
  ],
  declarations: [],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: formFieldAppearance},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {disableClose: true, hasBackdrop: true, closeOnNavigation: true, panelClass: 'modal-without-padding'}}
  ],
  exports: [
    ...materialModules,
    ...sharedAngularModules
  ]
})
export class MaterialConfigurationModule {
}
