import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { httpFactory } from '@angular/http/src/http_module';

import {Login} from '../model/login';
import {Signup} from '../model/signup';
import {Complaint} from '../model/complaint';

@Injectable()
export class UserService {

  constructor(private http:Http) {
      
   }
  UpdateCrime(_id:any,crimes:any){
    return this.http.put('http://localhost:3000/crime/crime/'+_id,crimes)
    .map((res)=>res.json());
  }
  getCrimes(){
    return this.http.get('http://localhost:3000/crime/crime')
    .map(res => res.json());
  }
  getUsers(){
    return this.http.get('http://localhost:3000/user/user')
    .map(res=>res.json());
  }
  getPoliceStations(){
    return this.http.get('http://localhost:3000/police/police')
    .map(res=>res.json());
  }
  getVerfied(login:Login){
    return this.http.post('http://localhost:3000/police/login',
    login).map(res=>res.json());
  }
  addComplaint(complaint:Complaint){
    return this.http.post("http://localhost:3000/crime/crime",complaint)
    .map((res)=>res.json());
  }
  createPoliceStation(signup:Signup){
    return this.http.post('http://localhost:3000/police/police',signup)
    .map((res)=>res.json());
  }
  createUser(signup:Signup){
    return this.http.post('http://localhost:3000/user/signup',signup).
    map((res)=>res.json());
  }
}
