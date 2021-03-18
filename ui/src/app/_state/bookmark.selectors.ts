import { createSelector } from '@ngrx/store';
import { BookmarksPage } from '../bookmarks/models/bookmark.model';
import { IAppState } from './main.reducer';

export const selectFeature = (state: IAppState) => state.bookmarks;

export const selectBookmarksWork = createSelector(
  selectFeature,
  (state: BookmarksPage) =>
    state.bookmarks.filter((val) => val.group === 'work')
);

export const selectBookmarksLeisure = createSelector(
  selectFeature,
  (state: BookmarksPage) =>
    state.bookmarks.filter((val) => val.group === 'leisure')
);

export const selectBookmarksPersonal = createSelector(
  selectFeature,
  (state: BookmarksPage) =>
    state.bookmarks.filter((val) => val.group === 'personal')
);
