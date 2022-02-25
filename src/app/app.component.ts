import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public theme = '';

  public changeTheme(theme: string): void {
    this.theme = theme;
  }
}
