import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
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

  public status?:string;

  public temp?: number;

  public PH?: number;

  public DO?: number;

  public KG?: number;

  public clicked:boolean = false;

  constructor(private bowlService : BowlApiService) {
    
   }

  ngOnInit(): void {
    this.temp = this.bowlService.getTemp();
    this.PH  = this.bowlService.getPh();
    this.DO = this.bowlService.getDo();
    this.KG = this.bowlService.getKg();
    if(this.index == 1) {
      this.status = "good";
    } else if(this.index == 11){
      this.status = "danger";
    }else if(this.index == 14 || this.index == 10){
      this.status = "warn"
    }
    else{
      this.status = "good"
    }
  }

  public onMessage() : void {
    if(!this.clicked) {
      this.clicked = true;
      } else {

      this.clicked = false;
      }
    }
}
