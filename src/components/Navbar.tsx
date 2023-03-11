import { For } from 'solid-js';
import { A, useLocation } from 'solid-start';

import Logo from '~/icons/Logo';
import NavBookmark from '~/icons/NavBookmark';
import NavHome from '~/icons/NavHome';
import NavMovies from '~/icons/NavMovies';
import NavTv from '~/icons/NavTv';

import AuthProfile from './AuthProfile';

const navItems = [
  {
    href: '/',
    label: 'home',
    Icon: NavHome,
  },
  {
    href: '/movies',
    label: 'movies',
    Icon: NavMovies,
  },
  {
    href: '/tv',
    label: 'tv',
    Icon: NavTv,
  },
  {
    href: '/bookmarks',
    label: 'bookmarks',
    Icon: NavBookmark,
  },
];

const Navbar = () => {
  const location = useLocation();
  const active = (path: string) => path === location.pathname;
  return (
    <nav class="md:m-6 lg:m-8">
      <div
        class="flex flex-row justify-between items-center w-full bg-surface-main py-5 px-4 md:rounded-[10px]
        lg:flex-col lg:w-[96px] lg:h-full lg:max-h-[960px] lg:rounded-[20px] lg:gap-[80px]
      "
      >
        <Logo />

        <div
          id="nav-items"
          class="flex w-max items-center justify-center flex-row lg:flex-col gap-6 lg:gap-10"
        >
          <For each={navItems}>
            {({ Icon, href, label }) => (
              <A href={href} aria-label={label}>
                <Icon
                  class="w-5 h-5 cursor-pointer hover:[&>path]:fill-primary"
                  classList={{
                    ['[&>path]:fill-white']: active(href),
                  }}
                />
              </A>
            )}
          </For>
        </div>

        <AuthProfile />
      </div>
    </nav>
  );
};

export default Navbar;
