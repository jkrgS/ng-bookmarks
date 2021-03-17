import { Action } from '@ngrx/store';
import { types } from '../helpers/constants';
import { Bookmark } from '../bookmarks/models/bookmark.model';

export class LoadBookmarks implements Action {
  readonly type = types.LoadBookmarks;
  constructor(public bookmarks: Bookmark[]) {}
}

export class LoadBookmarksFail implements Action {
  readonly type = types.LoadBookmarksFail;
  constructor(public bookmarks: Error) {}
}

export type BookmarkActions = LoadBookmarks | LoadBookmarksFail;
