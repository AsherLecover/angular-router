import { Component, OnInit } from '@angular/core';
import { DbJsonService } from '../../services/db-json.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private ajax: DbJsonService) { }

  ngOnInit(): void {
  }

}
