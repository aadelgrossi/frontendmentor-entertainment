import { mergeProps, ParentProps, Show } from 'solid-js';

import Navbar from './Navbar';

interface LayoutProps extends ParentProps {
  navbar?: boolean;
}

const Layout = (initialProps: LayoutProps) => {
  const props = mergeProps({ navbar: true }, initialProps);
  return (
    <div class="min-h-screen overflow-x-hidden bg-background flex flex-col text-text lg:flex-row">
      <Show when={props.navbar}>
        <Navbar />
      </Show>
      <main class="w-full flex flex-col px-4 md:px-6 lg:px-10 mt-4 lg:mt-8 gap-10">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
