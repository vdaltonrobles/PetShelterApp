console.log("list.components.ts is running");

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pets: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getAllPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }

}
