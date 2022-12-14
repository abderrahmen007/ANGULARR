import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  books? : Book[]; // tab de books 
  
  constructor(private bookService : BookService){


        }

        ngOnInit(): void {
          this.chargerBooks();
          }

          chargerBooks(){
          this.bookService.listeBook().subscribe(books => {
          console.log(books);
          this.books = books;
          });
          }


          supprimerBook(p: Book)
          {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
          this.bookService.supprimerbook(p.idBook).subscribe(() => {
          console.log("book supprimé");
          this.chargerBooks();
          });
          } 

}
