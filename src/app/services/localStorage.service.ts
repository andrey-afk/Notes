import {Injectable} from "@angular/core";
import {Notes} from "../models/interface";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  getAllNotes(): Notes[] {
    return JSON.parse(localStorage.getItem('notes'))
  }

  createNotes(note: Notes) {
    const updatedNotes = [...this.getAllNotes(), note]
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  removeNote(id: string) {
    const updatedNotes = this.getAllNotes().filter(note => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  getNoteById(id: string): Notes {
    return this.getAllNotes().find(note => note.id === id );
  }

  updateNote(note: Notes) {
    const updatedNotes = this.getAllNotes().map(n => n.id == note.id ? note : n)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }


}
