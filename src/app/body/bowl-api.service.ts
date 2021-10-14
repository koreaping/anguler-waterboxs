import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BowlApiService {
  
  getTemp(){
    return temp;
  }
  getPh(){
    return PH;
  }
  getDo(){
    return DO;
  }
  getKg(){
    return kg;
  }
  constructor() { 
    
  }
}
let temp  = 23.1
let PH = 5.09
let DO = 7.14
let kg = 2000