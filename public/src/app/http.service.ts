console.log("from http.services.ts(service = model)");
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // service to get all pets
  getAllPets(){
    return this._http.get('/pets')
  }
  // service to get one pet
  getOnePet(_id){
    return this._http.get(`/pets/${_id}`);
  }

  // create a new pet - requires two arguments so include data
  createPet(petData: any){
    return this._http.post('/pets/new', petData);
  }

  updatePet(_id, updateData:any){
    return this._http.put(`/pets/${_id}/edit`, updateData);
  }

  deletePet(_id){
    return this._http.delete(`/pets/${_id}`);
  }

  likeyPet(_id, petData){
    return this._http.put(`/pets/${_id}`, petData);
  }
  
}


