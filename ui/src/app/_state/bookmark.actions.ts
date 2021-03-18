import { Action, createAction, props } from '@ngrx/store';
import { types } from '../helpers/constants';
import { Bookmark } from '../bookmarks/models/bookmark.model';

// create new bookmark
export const CreateBookmark = createAction(
  types.CreateBookmark,
  props<{ bookmark: Bookmark }>()
);
// edit existing bookmark
export const EditBookmark = createAction(
  types.EditBookmark,
  props<{ id: string; bookmark: Bookmark }>()
);
// delete existing bookmark
export const DeleteBookmark = createAction(
  types.DeleteBookmark,
  props<{ id: string }>()
);
