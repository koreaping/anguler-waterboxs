import { Component } from '@angular/core';
import { BowlApiService } from './body/bowl-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  public data?: number;
  constructor(private bowlSevice: BowlApiService){
    this.data = bowlSevice.getData();
  }
}
