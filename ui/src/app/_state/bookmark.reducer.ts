import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { initialState } from '../helpers/bookmark';
import { BookmarksPage } from '../bookmarks/models/bookmark.model';
import { CreateBookmark, EditBookmark } from './bookmark.actions';

export const reducer = createReducer(
  initialState,

  on(CreateBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark],
  })),

  on(EditBookmark, (state, { id, bookmark }) => ({
    ...state,
    bookmarks: state.bookmarks.map((val) =>
      val.id === id ? { ...val, ...bookmark } : val
    ),
  }))
);

export function bookmarkReducer(
  state: BookmarksPage | undefined,
  action: Action
): any {
  return reducer(state, action);
}
