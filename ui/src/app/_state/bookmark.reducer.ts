import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { initialState } from '../helpers/bookmark';
import { BookmarksPage } from '../bookmarks/models/bookmark.model';
import {
  CreateBookmark,
  DeleteBookmark,
  EditBookmark,
} from './bookmark.actions';

export const reducer = createReducer(
  initialState,

  // create new bookmark
  on(CreateBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark],
  })),
  // edit existing bookmark
  on(EditBookmark, (state, { id, bookmark }) => ({
    ...state,
    bookmarks: state.bookmarks.map((val) =>
      val.id === id ? { ...val, ...bookmark } : val
    ),
  })),
  // delete existing bookmark
  on(DeleteBookmark, (state, { id }) => ({
    ...state,
    bookmarks: state.bookmarks.filter((val) => val.id !== id),
  }))
);

export function bookmarkReducer(
  state: BookmarksPage | undefined,
  action: Action
): any {
  return reducer(state, action);
}
