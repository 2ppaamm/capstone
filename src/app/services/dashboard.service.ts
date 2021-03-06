import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get('http://api.pamelalim.me/enrols/users')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getCourses(): Observable<any> {
    return this.http.get('http://api.pamelalim.me/courses')
    .map((response) => response['courses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getTeach(): Observable<any> {
    return this.http.get('http://api.pamelalim.me/enrols/teachers')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }

  getUser(): Observable<any> {
//    return this.user;
    return this.http.get('http://api.pamelalim.me/api/protected')
    .map((response) => response['user']);
  }

  getDashboard(): Observable<any> {
    return this.http.get('http://api.pamelalim.me/api/protected')
    .map((response) => response['data'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
}
