import { Component, createResource } from 'solid-js';
import Input from '~/components/Input';

import { createSignal, For } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import getData from '~/services/getData';
import Heading from '~/components/Heading';

const TVShows = () => {
  const [query, setQuery] = createSignal('');

  const [data] = createResource(query, getData);
  const recommended = () =>
    data()?.filter((item) => !item.isTrending && item.category === 'TV Series');

  return (
    <>
      <Input
        size="lg"
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for TV Series"
      />

      <div class="flex flex-col w-full gap-6 lg:gap-8">
        <Heading size="lg">Recommended for you</Heading>

        <div
          class="grid grid-cols-2 gap-4
        md:grid-cols-3 md:gap-5
        lg:grid-cols-[repeat(auto-fill,minmax(280px,auto))] lg:gap-10"
        >
          <For each={recommended()}>
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
      </div>
    </>
  );
};
export default TVShows;
