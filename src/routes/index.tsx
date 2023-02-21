import { createResource } from 'solid-js';
import Input from '~/components/Input';

import { createSignal, For } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import getData from '~/services/getData';
import Section from '~/components/Section';

import { debounce } from '@solid-primitives/scheduled';

const Home = () => {
  const [query, setQuery] = createSignal('');

  const [trending] = createResource(() => getData(query(), true));
  const [recommended] = createResource(query, () => getData(query(), false));

  const setDebouncedQuery = debounce((value: string) => setQuery(value), 500);

  return (
    <>
      <span class="lg:mr-20">
        <Input
          size="lg"
          value={query()}
          onInput={(e) => setDebouncedQuery(e.currentTarget.value)}
          icon={<img src={search} width="24px" height="24px" />}
          placeholder="Search for Movies or TV Shows"
        />
      </span>

      <Section title="Trending">
        <div class="carousel lg:max-w-[88vw] gap-4 md:gap-10">
          <For each={trending()}>
            {(item) => (
              <Card
                isTrending
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
        <div class="absolute right-0 bottom-0 h-[80%] w-20 bg-gradient-to-l from-background/90 to-transparent" />
      </Section>

      <Section>
        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(180px,auto))] gap-4
        md:grid-cols-[repeat(auto-fit,minmax(220px,auto))] md:gap-5
        lg:grid-cols-[repeat(auto-fill,minmax(260px,auto))] lg:gap-10"
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
      </Section>
    </>
  );
};

export default Home;
