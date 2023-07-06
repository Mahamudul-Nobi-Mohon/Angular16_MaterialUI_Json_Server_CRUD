import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/data/Country';
import { State } from 'src/app/model/data/State';
import { apiUrl } from 'src/app/model/shared/app-constants'; 


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http:HttpClient
  ) { }
   get():Observable<Country[]>{
    return this.http.get<Country[]>(`${apiUrl}/country`);
  } 
  // getVM():Observable<CountryViewModels[]>{
  //   return this.http.get<CountryViewModels[]>(`${apiUrl}/Countrys`);
  // } 
  getById(id:number):Observable<Country>{
    return this.http.get<Country>(`${apiUrl}/country/${id}`);
  } 

  getStateByCountryId(id:number):Observable<State>{
    var url = `${apiUrl}/state?countryId=${id}`; 
    return this.http.get<State>(url);
  } 

  insert(data:Country):Observable<Country>{
    console.log(data);
    return this.http.post<Country>(`${apiUrl}/country`, data);
  } 
  update(data:Country):Observable<any>{
    return this.http.put<any>(`${apiUrl}/country/${data.id}`, data);
  } 
  delete(data:Country):Observable<any>{
    return this.http.delete<any>(`${apiUrl}/country/${data.id}`);
  }

}