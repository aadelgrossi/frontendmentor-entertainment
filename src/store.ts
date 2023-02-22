import create from 'solid-zustand';

interface BookmarksState {
  bookmarks: string[];
}

interface BookmarksStore extends BookmarksState {
  toggleBookmark: (payload: string) => void;
}

const createBookmarksStore = create<BookmarksStore>((set, get) => ({
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
}));

export default createBookmarksStore;
