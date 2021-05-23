import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Notes} from "../../models/interface";
import {LocalStorageService} from "../../services/localStorage.service";
import {MatModalComponent} from "../../shared/mat-modal/mat-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-notes-info',
  templateUrl: './notes-info.component.html',
  styleUrls: ['./notes-info.component.scss']
})
export class NotesInfoComponent implements OnInit {
  public notes: Notes[] = [];
  public form: FormGroup;
  public id: string;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      subtitle: ['', Validators.required]
    })
    this.id = this.activateRoute.snapshot.params.id
    if (this.id) {
      this.localStorageService.getNoteById(this.id)
      this.form.patchValue({...this.localStorageService.getNoteById(this.id)})
    }
  }

  confirm() {
    const dialogRef = this.dialog.open(MatModalComponent);
    dialogRef.afterClosed().pipe(first()).subscribe(result => {
      if(this.form.valid && result === true) {
        if (this.id) {
          this.localStorageService.updateNote({...this.form.value, id: this.id})
        } else {
            this.localStorageService.createNotes({...this.form.value, id: `${+new Date()}`})
          }
        this.router.navigate(['/'])
      }
    })
  }

  delNote(id: string) {
    const dialogRef = this.dialog.open(MatModalComponent)
    dialogRef.afterClosed().pipe(first()).subscribe(result => {
      if( result === true) {
        this.localStorageService.removeNote(id)
        this.router.navigate(['/'])
      }
    })
  }

  goMainPage() {
    const dialogRef = this.dialog.open(MatModalComponent)
    dialogRef.afterClosed().pipe(first()).subscribe(result => {
      if( result === true) {
        this.router.navigate(['/'])
      }
    })
  }
}
