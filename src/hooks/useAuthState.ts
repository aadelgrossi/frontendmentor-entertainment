import { getAuth } from 'firebase/auth';
import { useAuth, useFirebaseApp } from 'solid-firebase';

const useAuthState = () => {
  const app = useFirebaseApp();
  const authApp = getAuth(app);

  const authenticated = useAuth(authApp).data;

  return Boolean(authenticated);
};

export default useAuthState;
