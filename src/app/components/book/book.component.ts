import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[] = [];
  selectedBook:Book;

  constructor(private bookService:BookService) {
      this.getBook();
   }
  getBook(){
    this.bookService.getAllBook().subscribe(
      books => this.books = books
    )
  }
  ngOnInit() {
  }
  onSelectedBook(book:Book){
    this.selectedBook = book;
  }
}
