import { Component, createResource } from 'solid-js';
import Input from '~/components/Input';

import { createSignal, For } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import getData from '~/services/getData';
import Heading from '~/components/Heading';
import Section from '~/components/Section';

const Home = () => {
  const [query, setQuery] = createSignal('');

  const [data] = createResource(query, getData);
  const recommended = () => data()?.filter((item) => !item.isTrending);

  return (
    <>
      <Input
        size="lg"
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for Movies or TV Shows"
      />

      <Section>
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
      </Section>
    </>
  );
};

export default Home;
