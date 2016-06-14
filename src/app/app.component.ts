import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',
  directives: [
    MD_TOOLBAR_DIRECTIVES
  ]
})
export class AppComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
