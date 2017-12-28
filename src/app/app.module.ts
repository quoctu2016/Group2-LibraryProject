import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookService } from './services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,
MatButton,MatMenuTrigger,MatMenuModule,MatDialogModule,MatAutocompleteModule,
MatFormFieldModule,MatInputModule,MatGridListModule, MatCardModule,MatTableModule
} from '@angular/material';
import { NavComponent } from './core/nav/nav.component';
import { MuonsachDialogComponent } from './dialogs/muonsach-dialog/muonsach-dialog.component';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    MessagesComponent,
    HomeComponent,
    NavComponent,
    MuonsachDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,
    MatDialogModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatFormFieldModule,
    MatGridListModule,MatCardModule,MatTableModule,
    HttpModule
  ],
  providers: [BookService, MessageService,UserService],
  bootstrap: [AppComponent],
  entryComponents:[MuonsachDialogComponent]
})
export class AppModule { }
