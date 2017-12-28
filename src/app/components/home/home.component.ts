import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Book[];
  constructor(private bookService:BookService) { }
  ngOnInit() {
    this.getTopBook();
  }
  getTopBook(){
    this.bookService.getAllBook().subscribe(books=>this.books = books.slice(0,2));
  }
}
