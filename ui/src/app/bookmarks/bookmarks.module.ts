import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromBookmarks from '../_state/bookmark.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    StoreModule.forFeature('bookmarks', fromBookmarks.reducer),
  ],
})
export class BookmarksModule {}
