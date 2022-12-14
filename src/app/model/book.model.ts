import { Author } from "./author.model";

export class Book{
    idBook!:number; 
    bookName!:string;
    genre!:string; 
    prix!:number; 
    author! : Author ;
}