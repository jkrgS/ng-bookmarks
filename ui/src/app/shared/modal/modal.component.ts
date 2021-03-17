import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bookmark } from 'src/app/bookmarks/models/bookmark.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark
  ) {}

  ngOnInit(): void {
    console.log({ damn: this.data });
  }

  onCancel(): void {
    console.log('canceled');
  }
}
