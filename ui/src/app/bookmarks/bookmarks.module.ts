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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [BookmarksListComponent, BookmarkItemComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatChipsModule,
    StoreModule.forFeature('bookmarks', fromBookmarks.reducer),
  ],
  exports: [BookmarksListComponent],
})
export class BookmarksModule {}
