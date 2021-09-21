import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BowlApiService } from '../bowl-api.service';


@Component({
  selector: 'app-bowl',
  templateUrl: './bowl.component.html',
  styleUrls: ['./bowl.component.css']
})
export class BowlComponent implements OnInit {

  @Input()
  public index!:number;

  public name?:string;

  public clicked:boolean = false;

  constructor(service: BowlApiService) {

   }

  ngOnInit(): void {
    if(this.index == 1) {
      this.name = "john";
    } else {
      this.name = "john2";
    }
  }

  public onMessage() : void {
    if(this.index == 1) {
      if(!this.clicked) {
        this.clicked = true;
      this.name = "sara";
      } else {

        this.clicked = false;
        this.name = "john"
      }
    } else {
      if(!this.clicked) {
        this.clicked = true;
        this.name = "sara2";
        } else {

        this.clicked = false;
          this.name = "john2"
        }
      }
  }
}
