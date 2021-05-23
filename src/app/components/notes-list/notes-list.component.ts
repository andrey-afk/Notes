import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Notes} from "../../models/interface";
import {LocalStorageService} from "../../services/localStorage.service";
import {MatDialog} from "@angular/material/dialog";
import {MatModalComponent} from "../../shared/mat-modal/mat-modal.component";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {

  public notes: Notes[] = []

  constructor(private localStorageService: LocalStorageService,
              public dialog: MatDialog,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showAllNotes()
  }

  deleteNote(id) {
    const dialogRef = this.dialog.open(MatModalComponent);
    dialogRef.afterClosed().pipe(first()).subscribe(result => {
      if(result === true) {
        this.localStorageService.removeNote(id);
        this.showAllNotes();
      }
    })
  }

  showAllNotes() {
    this.notes = this.localStorageService.getAllNotes()
    this.cdRef.detectChanges()
  }

}
