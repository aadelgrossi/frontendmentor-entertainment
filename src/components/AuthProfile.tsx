import { getAuth, signOut } from 'firebase/auth';
import { useAuth, useFirebaseApp } from 'solid-firebase';
import { BiSolidUserCircle } from 'solid-icons/bi';
import { Match, Switch } from 'solid-js';
import { A } from 'solid-start';

const AuthProfile = () => {
  const app = useFirebaseApp();
  const state = useAuth(getAuth(app));
  return (
    <Switch>
      <Match when={state.loading}>
        <div
          class="radial-progress text-primary animate-spin mt-auto m-[10px]"
          style={{
            '--value': '70',
            '--size': '20px',
            '--thickness': '2px',
          }}
        />
      </Match>

      <Match when={!state.data && !state.loading}>
        <A href="/login" aria-label="login" class="mt-auto">
          <BiSolidUserCircle size={40} class="fill-primary" />
        </A>
      </Match>

      <Match when={state.data}>
        <div
          class="relative transition-opacity mt-auto hover:opacity-40"
          onClick={() => signOut(getAuth(app))}
        >
          <img
            referrerpolicy="no-referrer"
            alt="user"
            src={
              state.data?.photoURL ||
              `https://i.pravatar.cc/150?u=${state.data?.uid}`
            }
            width={40}
            height={40}
            class="rounded-full cursor-pointer"
          />
        </div>
      </Match>
    </Switch>
  );
};

export default AuthProfile;
