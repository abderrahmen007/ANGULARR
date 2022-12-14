import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook = new Book();
  authors!: Author[];
  newIdAuth!: number;
  newAuthor!: Author;


  constructor(private bookService: BookService, private router: Router) {

  }

  ngOnInit(): void {
    this.bookService.listeAuthors().
      subscribe(auths => {
        console.log(auths);
        this.authors = auths._embedded.authors;
      }
      );
  }


  addBook() {
    this.newBook.author = this.authors.find(auth => auth.idAuthor == this.newIdAuth)!;
    this.bookService.ajouterBook(this.newBook)
      .subscribe(auth => {
        console.log(auth);
        this.router.navigate(['books']);
      });
  }


}
