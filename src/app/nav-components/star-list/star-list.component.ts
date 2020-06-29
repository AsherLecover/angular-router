import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import { SimpleStars } from '../../model/simple-stars';
import { log } from 'util';
import { SimpleItems } from '../../model/simple-items';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
  db: SimpleItems[] =[]

  constructor(private ajax: AjaxService) {
   }
  ngOnInit(): void {
    this.ajax.ajaxGet("https://raw.githubusercontent.com/AsherLecover/DB-ajax/master/stars.json")
    .subscribe((result) =>{
      this.db = result

      
    })
  }

}
