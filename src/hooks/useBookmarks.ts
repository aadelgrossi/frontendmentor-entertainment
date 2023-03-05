import { getAuth } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { useAuth, useFirebaseApp } from 'solid-firebase';
import { createResource } from 'solid-js';

const useBookmarks = () => {
  const app = useFirebaseApp();
  const db = getFirestore(app);

  const userId = useAuth(getAuth(app)).data?.uid;

  const bookmarksRef = collection(db, 'bookmarks');

  const [userBookmarks, { refetch }] = createResource(userId, async () => {
    if (!userId) return [];

    const bookmarkQuery = query(bookmarksRef, where('userId', '==', userId));

    const results = (await getDocs(bookmarkQuery)).docs.map((item) =>
      item.get('title')
    );

    return results;
  });

  const addBookmark = async (title: string) => {
    if (!userId) return;

    await setDoc(doc(bookmarksRef), {
      userId,
      title,
    }).then(() => refetch());
  };

  const removeBookmark = async (title: string) => {
    if (!userId) return;

    const bookmarkQuery = query(
      bookmarksRef,
      where('title', '==', title),
      where('userId', '==', userId)
    );

    const documentRef = (await getDocs(bookmarkQuery)).docs[0].ref;

    await deleteDoc(documentRef).then(() => refetch());
  };

  return { addBookmark, removeBookmark, userBookmarks };
};

export default useBookmarks;
