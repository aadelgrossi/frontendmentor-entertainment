import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import { useNavigate } from 'solid-start';

const useSignUpWithPassword = () => {
  const app = useFirebaseApp();
  const authApp = getAuth(app);

  const navigate = useNavigate();

  const signUp = async (email: string, password: string) =>
    createUserWithEmailAndPassword(authApp, email, password).then(() =>
      navigate('/')
    );

  return signUp;
};

export default useSignUpWithPassword;
