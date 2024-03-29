import { createResource, For, Show } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import Input from '~/components/Input';
import Layout from '~/components/Layout';
import Section from '~/components/Section';
import createSearchInput from '~/hooks/createSearchInput';
import getData from '~/services/getData';

const Home = () => {
  const searchInput = createSearchInput();
  const query = searchInput.query;
  const setQuery = searchInput.setQuery;

  const [trending] = createResource(query, () => getData(query(), true));
  const [recommended] = createResource(query, () => getData(query(), false));
  const [all] = createResource(query, () => getData(query()));

  const sectionTitle = () => {
    if (!query()) return 'Recommended for you';
    if (all()?.length)
      return `Found ${all()?.length} result(s) for '${query()}'`;
    return 'No results found';
  };

  return (
    <Layout>
      <span class="lg:mr-20">
        <Input
          size="lg"
          value={searchInput.query()}
          onInput={(e) => setQuery(e.currentTarget.value)}
          icon={<img alt="search" src={search} width="24px" height="24px" />}
          placeholder="Search for Movies or TV Shows"
        />
      </span>

      <Show when={trending()?.length && !query()}>
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
                />
              )}
            </For>
          </div>
          <div class="absolute right-0 bottom-0 h-[80%] w-20 bg-gradient-to-l from-background/90 to-transparent" />
        </Section>
      </Show>

      <Section title={sectionTitle()}>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(180px,auto))] gap-5 md:grid-cols-[repeat(auto-fit,minmax(220px,auto))] lg:grid-cols-[repeat(auto-fill,minmax(260px,auto))]">
          <For each={query() ? all() : recommended()}>
            {(item) => (
              <Card
                title={item.title}
                image={item.thumbnail.regular.large}
                category={item.category}
                year={item.year}
                rating={item.rating}
              />
            )}
          </For>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
