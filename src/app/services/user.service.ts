import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BBOM } from '../models/BBOM.model';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
@Injectable()
export class UserService {
  url:string = "http://5a434145342c490012f3fc05.mockapi.io/User";
  constructor(private http:Http) { }
  getAllUser():Observable<User[]>{
    return this.http.get(this.url).map((user:Response)=>user.json());
  }
}
