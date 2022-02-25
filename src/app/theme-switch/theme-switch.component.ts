import {Component, EventEmitter, Output} from '@angular/core';

const THEME_LINK = [
  {angular: 'Primary', theme1: 'Primary', theme2: 'Neutre'},
  {angular: 'Accent', theme1: 'Secondary', theme2: 'Validation'},
  {angular: 'Warn', theme1: 'Alerte', theme2: 'Erreur'}
];

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  @Output() changeTheme= new EventEmitter<string>();

  themelink = THEME_LINK;
  displayedColumns: string[] = ['angular', 'theme1', 'theme2'];

  public selectFirstTheme(): void {
    this.changeTheme.emit('');
  }

  public selectSecondTheme(): void {
    this.changeTheme.emit('second-theme');
  }
}
