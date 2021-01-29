import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: string = 'long-dick';

  constructor() {
    this.changeName('John');
  }

  changeName(name: string):void {
    this.name = name;
  }
}
