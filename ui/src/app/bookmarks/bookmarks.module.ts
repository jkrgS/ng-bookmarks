import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromBookmarks from '../_state/bookmark.reducer';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [BookmarksListComponent, BookmarkItemComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    StoreModule.forFeature('bookmarks', fromBookmarks.reducer),
  ],
  exports: [BookmarksListComponent],
})
export class BookmarksModule {}
