import { Component } from '@angular/core';
import { FormGuardServiceService } from './services/form-guard-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  

  constructor(public aaa: FormGuardServiceService){

  

  }
}

