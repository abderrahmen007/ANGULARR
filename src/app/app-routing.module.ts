import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { RechercheParAuthorComponent } from './recherche-par-author/recherche-par-author.component';

const routes: Routes = [
  {path: "books",component : BooksComponent},
  {path: "add-book",component:AddBookComponent},
  {path: "updateBook/:id", component: UpdateBookComponent},
  {path: "",redirectTo:"books",pathMatch:"full"}, 
  {path: "rechercheParAuthor", component : RechercheParAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
