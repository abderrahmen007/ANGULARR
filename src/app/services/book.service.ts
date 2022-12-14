import { Injectable } from '@angular/core';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksComponent } from '../books/books.component';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
import { auhorWrapper } from '../model/authorWrapped.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  books!: Book[]; // tab de books 
  authors!: Author[];
  apiURL: string = 'http://localhost:8080/books/api';
  apiURLCat: string = 'http://localhost:8080/books/auth';

  constructor(private http: HttpClient) {


    /* this.authors=[     
       { idAuthor: 1, AuthorName : "Paolo Colheo", BirthDay : "18/8/6666", Nationality:"brazilian"},
       { idAuthor: 2, AuthorName : "med rachad hamzaoui", BirthDay : "18/8/6666", Nationality:"tunisian"}
  ]; 
 */
    /* console.log("Creation de service books!");

    this.books = [
       { idBook: 1, bookName : "xxxxx", genre : "eeeee", prix: 15,
        author : { idAuthor: 1, AuthorName : "Paolo Colheo", BirthDay : "18/8/6666", Nationality:"brazilian"}},
        { idBook: 2, bookName : "aaaa", genre : "zzzz", prix: 45,
        author : { idAuthor: 2, AuthorName : "Paolo Colheo", BirthDay : "18/8/6666", Nationality:"brazilian"}},
        { idBook: 3, bookName : "yyyy", genre : "ssse", prix: 60,
        author : { idAuthor: 3, AuthorName : "Paolo Colheo", BirthDay : "18/8/6666", Nationality:"brazilian"}},

      
      ]; */}


  listeBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  ajouterBook(b: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, b, httpOptions);
  }

  supprimerbook(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterBook(id: number): Observable<Book> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Book>(url);
  }


  trierbooks() {
    this.books = this.books.sort((n, n1) => {
      if (n.idBook! > n1.idBook!) {
        return 1;
      }
      if (n.idBook! < n1.idBook!) {
        return -1;
      }
      return 0;
    });
  }

  updateBook(prod: Book): Observable<Book> {
    return this.http.put<Book>(this.apiURL, prod, httpOptions);
  }

  listeAuthors(): Observable<auhorWrapper> {
    return this.http.get<auhorWrapper>(this.apiURLCat);
  }



  rechercherParAuthor(idAuthor: number): Observable<Book[]> {
    const url = `${this.apiURL}/booksAuth/${idAuthor}`;
    return this.http.get<Book[]>(url);
  }



  /* consulterAuthors(id:number): Author{
     return this.authors.find(auth => auth.idAuthor == id)!;
     } */
}
