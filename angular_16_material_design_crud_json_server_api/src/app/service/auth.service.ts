import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'user',inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'user/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl+'user');
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'user/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }


  RegisterProduct(inputdata:any){
    return this.http.post(this.apiurl +'product',inputdata)
  }
  GetallProducts(){
    return this.http.get(this.apiurl+'product');
  }
}
