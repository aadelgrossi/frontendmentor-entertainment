import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import { useNavigate } from 'solid-start';

const useLoginWithProvider = () => {
  const app = useFirebaseApp();
  const authApp = getAuth(app);

  const navigate = useNavigate();

  const signInWithGoogle = () =>
    signInWithPopup(authApp, new GoogleAuthProvider()).then(() =>
      navigate('/')
    );

  const signInWithGithub = () =>
    signInWithPopup(authApp, new GithubAuthProvider()).then(() =>
      navigate('/')
    );

  return { signInWithGoogle, signInWithGithub };
};

export default useLoginWithProvider;
