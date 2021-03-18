import { ActionReducerMap } from '@ngrx/store';
import { Bookmark, BookmarksPage } from '../bookmarks/models/bookmark.model';
import { initialState } from '../helpers/bookmark';
import { bookmarkReducer } from './bookmark.reducer';

// initialize application state
export interface IAppState {
  bookmarks: BookmarksPage;
}

export const AppState = {
  bookmarks: initialState,
};

export const reducers: ActionReducerMap<IAppState> = {
  bookmarks: bookmarkReducer,
};
