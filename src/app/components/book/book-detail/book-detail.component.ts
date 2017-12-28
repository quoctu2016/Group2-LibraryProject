import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
   book:Book;

  constructor(private bookService:BookService,
    private location:Location,
    private route:ActivatedRoute
  ) {

   }

  ngOnInit() {
    this.getBookByID();
  }
  getBookByID(){
    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
  goBack(){
    this.location.back();
  }
}
