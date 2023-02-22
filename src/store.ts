import create from 'solid-zustand';

import { persist } from 'zustand/middleware';
interface BookmarksState {
  bookmarks: string[];
}

interface BookmarksStore extends BookmarksState {
  toggleBookmark: (payload: string) => void;
}

const persistedStore = persist<BookmarksStore>(
  (set, get) => ({
    bookmarks: [],
    toggleBookmark: (payload) => {
      const isBookmarked = get().bookmarks.includes(payload);

      if (isBookmarked) {
        return set({
          bookmarks: get().bookmarks.filter(
            (bookmarked) => bookmarked !== payload
          ),
        });
      }

      return set({ bookmarks: [...get().bookmarks, payload] });
    },
  }),
  { name: '@@entertainment:bookmarks' }
);

const createBookmarksStore = create(persistedStore);

export default createBookmarksStore;
