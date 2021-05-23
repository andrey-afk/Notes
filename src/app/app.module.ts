import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotesInfoComponent } from './components/notes-info/notes-info.component';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {materialModule} from "./shared/material.module";
import {MatModalComponent} from "./shared/mat-modal/mat-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesInfoComponent,
    MatModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    materialModule
  ],
  providers: [],
  entryComponents: [MatModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
