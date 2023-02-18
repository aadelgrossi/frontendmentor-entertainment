import { For } from 'solid-js';
import Logo from '../icons/Logo';
import NavBookmark from '../icons/NavBookmark';
import NavHome from '../icons/NavHome';
import NavMovies from '../icons/NavMovies';
import NavTv from '../icons/NavTv';

const navItems = [
  {
    label: 'home',
    Icon: NavHome,
  },
  {
    label: 'movies',
    Icon: NavMovies,
  },
  {
    label: 'tv',
    Icon: NavTv,
  },
  {
    label: 'bookmarks',
    Icon: NavBookmark,
  },
];

interface NavbarProps {
  active?: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav class="md:m-6">
      <div class="flex flex-row justify-between w-full bg-surface-main py-5 px-4 md:rounded-[10px]">
        <Logo />

        <div id="nav-items" class="flex w-max items-center flex-row gap-6">
          <For each={navItems}>
            {({ Icon, label }) => (
              <Icon
                class="w-5 h-5 cursor-pointer hover:[&>path]:fill-surface-hover"
                classList={{
                  ['[&>path]:fill-white']: label === props.active,
                }}
              />
            )}
          </For>
        </div>

        <div id="user">
          <p>login</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
