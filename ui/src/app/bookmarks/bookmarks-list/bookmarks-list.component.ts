import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CreateBookmark } from 'src/app/_state/bookmark.actions';
import { IAppState } from 'src/app/_state/main.reducer';
import { Bookmark } from '../models/bookmark.model';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksListComponent implements OnInit {
  header = 'Bookmarks List';
  bookmark!: Bookmark;
  bookmarksWork$!: Observable<Bookmark[]>;
  bookmarksLeisure$!: Observable<Bookmark[]>;
  bookmarksPersonal$!: Observable<Bookmark[]>;

  constructor(public dialog: MatDialog, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.bookmarksWork$ = this.store.select((s) =>
      s.bookmarks.bookmarks.filter((val) => val.group === 'work')
    );
    this.bookmarksLeisure$ = this.store.select((s) =>
      s.bookmarks.bookmarks.filter((val) => val.group === 'leisure')
    );
    this.bookmarksPersonal$ = this.store.select((s) =>
      s.bookmarks.bookmarks.filter((val) => val.group === 'personal')
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '333px',
    });

    // the warning below is a known error from typescript => https://github.com/microsoft/TypeScript/issues/43053
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.store.dispatch(
        CreateBookmark({ bookmark: { id: nanoid(), ...result } })
      );
    });
  }
}
