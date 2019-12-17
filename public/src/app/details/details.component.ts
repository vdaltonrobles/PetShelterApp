console.log("details.components.ts is running");

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  onePet: any = {};
  isLike: boolean = false;
  
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
    ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let observable = this._httpService.getOnePet(params['_id']);
    observable.subscribe(data => {
      console.log("Got 1 pet!", data),
      this.onePet = data;
    });
    });
  }

  adoptPet(_id){
    let observable = this._httpService.deletePet(_id);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);

    });
  }

  likesPet(_id){
    this.isLike = true;
    let observable = this._httpService.likeyPet(_id, this.onePet);
    observable.subscribe(data => {
      this.ngOnInit();

    })
  }

}
