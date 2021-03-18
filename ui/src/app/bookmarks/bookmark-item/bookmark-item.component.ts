import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Bookmark } from '../models/bookmark.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/_state/main.reducer';
import { DeleteBookmark, EditBookmark } from 'src/app/_state/bookmark.actions';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-bookmark-item',
  // animated bookmark icon at the top right of the card
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
    ]),
  ],
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkItemComponent implements OnInit {
  @Input() bookmark!: Bookmark;

  step = 0; // expansion panel status
  // array for available buttons per bookmark
  buttons = [
    { title: 'Delete', color: '', icon: 'restore_from_trash' },
    { title: 'Edit', color: '', icon: 'mode_edit' },
  ];

  setStep(index: number): void {
    this.step = index;
  }

  constructor(public dialog: MatDialog, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.step = +this.bookmark?.expanded;
  }

  onEdit(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '333px',
      data: { ...this.bookmark },
    });

    // the warning below is a known error from typescript => https://github.com/microsoft/TypeScript/issues/43053
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      // if user save changes through modal, dispatch
      this.store.dispatch(
        EditBookmark({
          id: this.bookmark.id,
          bookmark: { ...result, expanded: true },
        })
      );
    });
  }
  onDelete(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      maxWidth: '333px',
      data: {
        title: 'Confirm delete',
        message: `Are you sure you want to delete the ${this.bookmark.name} bookmark?`,
      },
    });

    // the warning below is a known error from typescript => https://github.com/microsoft/TypeScript/issues/43053
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      // delete existing bookmark
      this.store.dispatch(DeleteBookmark({ id: this.bookmark.id }));
    });
  }
}
