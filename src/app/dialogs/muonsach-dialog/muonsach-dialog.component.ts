import {Component,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { MatDialogRef } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-muonsach-dialog',
  templateUrl: './muonsach-dialog.component.html',
  styleUrls: ['./muonsach-dialog.component.css']
})
export class MuonsachDialogComponent implements OnInit {
  elementData:Element[] = [];
  displayedColumns = ['code', 'name', 'action'];
  userControl: FormControl;
  bookControl: FormControl;
  
  users:User[];
  selectUser:User;
  selectBook:Book;
  code:number = null;
  filteredUsers: Observable<User[]>;
  books:Book[];
  filteredBooks:Observable<Book[]>;
  ngOnInit() {
     
    }
  constructor(private dialog: MatDialogRef<MuonsachDialogComponent>,private userService:UserService,
    private bookservice:BookService
  ) {
    this.userControl = new FormControl();
    this.bookControl = new FormControl();
    this.userService.getAllUser().subscribe(
      user =>{
        this.users = user;
        this.filteredUsers = this.userControl.valueChanges.pipe(
          startWith(''),
          map(user => user ? this.filterUsers(user) : this.users.slice())
        )
      }
    )
    this.bookservice.getAllBook().subscribe(books=>{
      this.books = books;
      this.filteredBooks = this.bookControl.valueChanges.pipe(
        startWith(''),
        map(book=>book?this.filterBooks(book):this.books.slice())
      )
    })
  }

  dataSource = new ExampleDataSource(this.elementData);

  closeDialog() {
    this.dialog.close();
  }
  filterUsers(name: string) {
    return this.users.filter(user =>
      user.MemberCode.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }
  filterBooks(name: string) {
    return this.books.filter(user =>
      user.BookCode.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
  }
  getMemberById(id:number){
    return this.users.find(x => x.MemberCode === id);
  }

  // userOnChange(option:User){
  //   this.selectUser = new User();
  //     this.selectUser = option;
  //     console.log(option);
  // }
  // bookOnChange(option:Book){
  //     this.selectBook = option;
  //     console.log(option);
  // }
  displayUserFn(val: User) {
    return val ? val.MemberCode : val;
  }
  displayBookFn(val: Book) {
    return val ? val.BookCode : val;
  }
  userSelected(){
    this.selectUser = this.userControl.value;
  }
  bookSelected(){
    this.selectBook = this.bookControl.value;
    const copy = this.dataSource.data().slice();
    let obj = new Element();
    obj.bookCode = this.selectBook.BookCode;
    obj.bookName = this.selectBook.BookName;
    this.dataSource.update(obj);
  }
  deleteElement(code){
    this.dataSource.delete(code);
  }
}
export class Element {
  bookCode: string;
  bookName: string;
}
export class ExampleDataSource extends DataSource<any> {
  
    private dataSubject = new BehaviorSubject<Element[]>([]);
  
    data() {
      return this.dataSubject.value;
    }
  
    update(data:Element) {
      let ind = this._data.findIndex(d=>d.bookCode===data.bookCode);
      if(ind<0)
      this._data.push(data);
      this.dataSubject.next(this._data);
    }
    delete(bookCode:string){
      let ind = this._data.findIndex(d=>d.bookCode===bookCode);
      console.log(ind);
      if(ind>=0){
        this._data.splice(ind,1);
        this.dataSubject.next(this._data);
      }
    }
    _data:Element[];
    constructor(data: any[]) {
      super();
      this._data = data;
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
      return this.dataSubject;
    }
  
    disconnect() {}
  }