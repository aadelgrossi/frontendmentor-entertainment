import { createResource, For, Show } from 'solid-js';

import search from '~/assets/icon-search.svg';
import Card from '~/components/Card';
import Input from '~/components/Input';
import Layout from '~/components/Layout';
import Section from '~/components/Section';
import createSearchInput from '~/hooks/createSearchInput';
import useAuthState from '~/hooks/useAuthState';
import useBookmarks from '~/hooks/useBookmarks';
import getData from '~/services/getData';
import createBookmarksStore from '~/store';

const Bookmarks = () => {
  const searchInput = createSearchInput();
  const query = searchInput.query;
  const setQuery = searchInput.setQuery;

  const authenticated = useAuthState();

  const localBookmarks = createBookmarksStore((state) => state.bookmarks);
  const { bookmarks } = useBookmarks();

  const [data] = createResource(query, () => getData(query()));

  const movies = () => {
    if (authenticated) {
      return data()?.filter(
        (item) => bookmarks()?.includes(item.title) && item.category === 'Movie'
      );
    }
    return data()?.filter(
      (item) => localBookmarks.includes(item.title) && item.category === 'Movie'
    );
  };

  const tv = () => {
    if (authenticated) {
      return data()?.filter(
        (item) =>
          bookmarks()?.includes(item.title) && item.category === 'TV Series'
      );
    }
    return data()?.filter(
      (item) =>
        localBookmarks.includes(item.title) && item.category === 'TV Series'
    );
  };

  return (
    <Layout>
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
                />
              )}
            </For>
          </div>
        </Section>
      </Show>
    </Layout>
  );
};
export default Bookmarks;
