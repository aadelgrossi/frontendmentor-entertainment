import { createResource, For } from 'solid-js';
import Input from '~/components/Input';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import getData from '~/services/getData';
import Section from '~/components/Section';
import createSearchInput from '~/hooks/createSearchInput';
import Layout from '~/components/Layout';

const TVShows = () => {
  const searchInput = createSearchInput();
  const query = searchInput.query;
  const setQuery = searchInput.setQuery;

  const [data] = createResource(query, () => getData(query()));
  const tv = () => data()?.filter((item) => item.category === 'TV Series');

  const sectionTitle = () => {
    if (!query()) return 'Recommended for you';
    if (tv()?.length) return `Found ${tv()?.length} result(s) for '${query()}'`;
    return 'No results found';
  };

  return (
    <Layout>
      <Input
        size="lg"
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for TV Series"
      />

      <Section title={sectionTitle()}>
        <div
          class="grid lg:w-[90%] grid-cols-[repeat(auto-fill,minmax(180px,auto))] gap-4
        md:grid-cols-[repeat(auto-fit,minmax(220px,auto))] md:gap-5
        lg:grid-cols-[repeat(auto-fill,minmax(260px,auto))] lg:gap-10"
        >
          <For each={tv()}>
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
export default TVShows;
