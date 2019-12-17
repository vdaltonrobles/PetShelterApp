console.log("new.components.ts is running");

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  addPet: any = {};
  errors: any = {};

  constructor(
    private _httpService: HttpService, 
    private _router: Router
    ) {}

  ngOnInit() {
  }

  newPet() {
    let observable = this._httpService.createPet(this.addPet);
    observable.subscribe( data  => {
      console.log(data);
      if(data['errors']){
        this.errors = data['errors'];
      }
      else{
        this._router.navigate(['/']);
      }
    });
  }


}
