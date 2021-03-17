const groupList = ['work', 'leisure', 'personal'];

export interface BookmarksState {
  readonly bookmarksList: BookmarksPage;
}

export interface BookmarksPage {
  bookmarks: Bookmark[];
  bookmarksLoading: boolean;
}

export interface Bookmark {
  id: number;
  name: string;
  url: string;
  group: typeof groupList;
}
