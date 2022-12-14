import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParAuthorComponent } from './recherche-par-author/recherche-par-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    RechercheParAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
