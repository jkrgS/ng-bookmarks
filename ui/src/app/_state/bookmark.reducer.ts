import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initialState } from '../helpers/bookmark';
import { types } from '../helpers/constants';
import {
  BookmarksPage,
  BookmarksState,
} from '../bookmarks/models/bookmark.model';
import { BookmarkActions } from './bookmark.actions';

// tslint:disable-next-line: typedef
export function reducer(state = initialState, action: BookmarkActions) {
  switch (action.type) {
    case types.LoadBookmarks:
      return { ...state, bookmarksLoading: true };
    case types.LoadBookmarksFail:
      return { ...state, bookmarksLoading: false };
    default:
      return state;
  }
}

export const bookmarks = createFeatureSelector<BookmarksState, BookmarksPage>(
  'bookmarksList'
);
export const bookmarkList = createSelector(
  bookmarks,
  (s: BookmarksPage) => s.bookmarks
);
export const bookmarkListLoading = createSelector(
  bookmarks,
  (s: BookmarksPage) => s.bookmarksLoading
);
