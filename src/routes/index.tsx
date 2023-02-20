import type { Component } from 'solid-js';
import Input from '~/components/Input';

import { For } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import data from '~/constants/data';

const App: Component = () => {
  const recommended = data.filter((item) => !item.isTrending);

  return (
    <>
      <Input
        size="lg"
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for Movies or TV Shows"
      />

      <div
        class="grid grid-cols-2 gap-4
        md:grid-cols-3 md:gap-5
        lg:grid-cols-[repeat(auto-fill,minmax(280px,auto))] lg:gap-10"
      >
        <For each={recommended}>
          {(item) => (
            <Card
              title={item.title}
              image={item.thumbnail.regular.large}
              category={item.category}
              year={item.year}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
            />
          )}
        </For>
      </div>
    </>
  );
};
export default App;
