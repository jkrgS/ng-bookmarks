export interface BookmarksPage {
  bookmarks: Bookmark[];
}

export interface Bookmark {
  id: string;
  name: string;
  url: string;
  group: string;
  expanded: false;
}
