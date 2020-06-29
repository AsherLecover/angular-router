import { Component, OnInit } from '@angular/core';
import { DbJsonService } from '../../services/db-json.service';
import { SimpleItems, ItemsArr } from '../../model/simple-items';
import { AjaxService } from '../../services/ajax.service';
import { log } from 'util';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  showPersons:boolean = false;

  keysArr = [];
  db

  constructor(private ajax: AjaxService) {
    this.ajax.ajaxGet("https://raw.githubusercontent.com/AsherLecover/DB-ajax/master/db.json")
    .subscribe((result) =>{
      this.db = result
      console.log("dddbbb", this.db[0])
      this.keysArr = Object.keys(this.db[0]);
    })

    
   }

  ngOnInit(): void {
  }

}
