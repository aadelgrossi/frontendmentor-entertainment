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
  const trending = () => data()?.filter((item) => item.isTrending);
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

      <Section title="Trending">
        <div class="carousel gap-4 md:gap-10">
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
      </Section>

      <Section>
        <div
          class="grid lg:w-[90%] grid-cols-[repeat(auto-fill,minmax(180px,auto))] gap-4
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
