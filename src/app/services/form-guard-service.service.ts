import { Injectable } from '@angular/core';
import {CanDeactivate, Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormGuardServiceService  implements CanDeactivate<any>{
  a = ''
  formIsFull: boolean = false;

  constructor(public router: Router) {

  }

  canDeactivate(): boolean {
    let r = Math.random()
    console.log(r) 
    if (this.formIsFull) {
      this.a = "your form is full"
      
      return true;
    }
    alert("plaese complite the form")
    this.a = "plaese complite the form"

    return false;
  }

}
