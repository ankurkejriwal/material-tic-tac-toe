import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-tic-tac-toe';

  isAuthenticated = false;
  
  async logout(): Promise<void> {
    // todo
  }
}
