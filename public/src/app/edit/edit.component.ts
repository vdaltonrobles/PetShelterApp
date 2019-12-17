console.log("edit.components.ts is running");

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  onePet: any = {};
  error2s: any = {};

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
    ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      let observable = this._httpService.getOnePet(params['_id']);
      observable.subscribe( data => this.onePet = data );
    });

  }

  updatingPet(_id){
    let observable = this._httpService.updatePet(_id, this.onePet);
    observable.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.error2s = data['errors'];
      } 
      else {
        this._router.navigate(['/pets', this.onePet._id]);
      }
    });
  }

  cancelEdit(_id){
    this._router.navigate(['/pets', this.onePet._id]);
  }

}
