import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-recherche-par-author',
  templateUrl: './recherche-par-author.component.html',
  styles: [
  ]
})
export class RechercheParAuthorComponent implements OnInit {
  books!: Book[];
  IdAuthor!: number;
  authors!: Author[]
  
constructor( private bookService : BookService)
{

}
  ngOnInit(): void {
    this.bookService.listeAuthors().
      subscribe(auth => {
        this.authors = auth._embedded.authors;
        console.log(auth);
      }); 
  }

  onChange() {
    this.bookService.rechercherParAuthor(this.IdAuthor).
    subscribe(auths =>{this.books=auths});
    }

}
