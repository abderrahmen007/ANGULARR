import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styles: [
  ]
})
export class UpdateBookComponent implements OnInit {

  currentBook = new Book();
  authors!: Author[];
  updatedAuthorId!: number;


  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) {

  }

  ngOnInit(): void {
    this.bookService.listeAuthors().
      subscribe(auths => {
        console.log(auths);
        this.authors = auths._embedded.authors;
      }
      );
    this.bookService.consulterBook(this.activatedRoute.snapshot.params['id']).
      subscribe(auth => {
        this.currentBook = auth;
        this.updatedAuthorId = this.currentBook.author.idAuthor;
      });

  }

  updateBook() {
    this.currentBook.author = this.authors.find(auth => auth.idAuthor == this.updatedAuthorId)!;
    this.bookService.updateBook(this.currentBook).subscribe(auth => {
      this.router.navigate(['books']);
    }
    );

  }
}