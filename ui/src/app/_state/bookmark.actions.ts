import { Action, createAction, props } from '@ngrx/store';
import { types } from '../helpers/constants';
import { Bookmark } from '../bookmarks/models/bookmark.model';

export const CreateBookmark = createAction(
  types.CreateBookmark,
  props<{ bookmark: Bookmark }>()
);

export const EditBookmark = createAction(
  types.EditBookmark,
  props<{ id: string; bookmark: Bookmark }>()
);
