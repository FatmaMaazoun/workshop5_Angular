import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './core/todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'todo', component: TodoComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parcour des routes pour savoir si route existante donc ijb composant sinon erreur
  exports: [RouterModule] // exportation(twali
})
export class AppRoutingModule { }
