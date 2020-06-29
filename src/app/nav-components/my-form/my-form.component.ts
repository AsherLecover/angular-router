import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { FormGuardServiceService } from '../../services/form-guard-service.service';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  arr: string[][] =[]
  arr2: string[]  =  []
  createDiv: boolean = false;

  constructor(public svc: FormGuardServiceService) { }

  ngOnInit(): void {
  }
  saveDate(fn, ln, email, phone){
 
    if(fn.value.length >0 && ln.value.length >0 && email.value.length >0 && phone.value.length >0){
      this.arr2.push(`Frist Name: ${fn.value}`, `Last Name: ${ln.value}`, `Email: ${email.value}`, `Phone: ${phone.value}`);
      this.arr.push(this.arr2)
      console.log(this.arr.length)
      this.arr2 = []
      this.svc.formIsFull = true
    }
    
    
  }
  showWorkers(){
    this.createDiv = true;
  }

}



