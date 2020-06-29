import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { SimpleItems } from '../model/simple-items';

@Injectable({
  providedIn: 'root'
})
export class DbJsonService {

  constructor(private ajax: AjaxService) {
  


   }
}
