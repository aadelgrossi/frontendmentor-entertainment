import { useFirebaseApp } from 'solid-firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'solid-start';

const useLoginWithPassword = () => {
  const app = useFirebaseApp();
  const authApp = getAuth(app);

  const navigate = useNavigate();

  const login = async (email: string, password: string) =>
    signInWithEmailAndPassword(authApp, email, password).then(() =>
      navigate('/')
    );

  return login;
};

export default useLoginWithPassword;
