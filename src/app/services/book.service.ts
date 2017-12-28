import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import {Http} from '@angular/http'
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';
@Injectable()
export class BookService {
  books:Book[];
  private url = "http://5a434145342c490012f3fc05.mockapi.io/book";
  constructor(private http:Http) { }
  getAllBook():Observable<Book[]>{
    return this.http.get(this.url).map((books:Response)=>books.json());
  }
}
