import { createResource, For, Show } from 'solid-js';
import Input from '~/components/Input';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import getData from '~/services/getData';
import Section from '~/components/Section';

import createSearchInput from '~/hooks/createSearchInput';

const Bookmarks = () => {
  const searchInput = createSearchInput();
  const query = searchInput.query;
  const setQuery = searchInput.setQuery;

  const [data] = createResource(query, () => getData(query()));
  const movies = () =>
    data()?.filter((item) => item.isBookmarked && item.category === 'Movie');

  const tv = () =>
    data()?.filter(
      (item) => item.isBookmarked && item.category === 'TV Series'
    );

  return (
    <>
      <Input
        size="lg"
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for bookmarked Movies or TV Shows"
      />

      <Show when={movies()?.length}>
        <Section title="Bookmarked Movies">
          <div
            class="grid lg:w-[90%] grid-cols-[repeat(auto-fill,minmax(180px,auto))] gap-4
        md:grid-cols-[repeat(auto-fit,minmax(220px,auto))] md:gap-5
        lg:grid-cols-[repeat(auto-fill,minmax(260px,auto))] lg:gap-10"
          >
            <For each={movies()}>
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
      </Show>

      <Show when={tv()?.length}>
        <Section title="Bookmarked TV Shows">
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
                  isBookmarked={item.isBookmarked}
                />
              )}
            </For>
          </div>
        </Section>
      </Show>
    </>
  );
};
export default Bookmarks;
