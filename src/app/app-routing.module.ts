import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import {NotesInfoComponent} from "./components/notes-info/notes-info.component";

const routes: Routes = [
  {path: '', component: NotesListComponent},
  {path: 'add', component: NotesInfoComponent},
  {path: 'edit/:id', component: NotesInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
