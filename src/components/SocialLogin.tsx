import { getAuth } from 'firebase/auth';
import { useAuth, useFirebaseApp } from 'solid-firebase';
import { AiFillGithub, AiFillGoogleCircle } from 'solid-icons/ai';
import { Show } from 'solid-js';

import useLoginWithProvider from '~/hooks/useLoginWithProvider';

import Button from './Button';

const AuthProviders = () => {
  const { signInWithGithub, signInWithGoogle } = useLoginWithProvider();

  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));

  return (
    <div>
      <div class="flex flex-col gap-4 my-8">
        <Button class="bg-[#ea4335] text-white" onClick={signInWithGoogle}>
          <AiFillGoogleCircle size={18} />
          Login with Google
        </Button>
        <Button class="bg-[#333] text-white" onClick={signInWithGithub}>
          <AiFillGithub size={18} />
          Login with Github
        </Button>
      </div>
      <Show when={state.error}>
        <p class="text-primary font-light">An error occurred</p>
      </Show>
    </div>
  );
};

export default AuthProviders;
