import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Bookmark } from '../models/bookmark.model';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
})
export class BookmarksListComponent implements OnInit {
  header = 'Bookmarks List';
  _bookmark!: Bookmark;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log('dialog');
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { ...this._bookmark },
    });

    // the warning below is a known error from typescript => https://github.com/microsoft/TypeScript/issues/43053
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  ngOnInit(): void {}
}
