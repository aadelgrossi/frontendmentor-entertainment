import type { Component } from 'solid-js';
import Input from './components/Input';

import { For } from 'solid-js';

import './index.css';

import search from './assets/icon-search.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './constants/data';

const App: Component = () => {
  const recommended = data.filter((item) => !item.isTrending);

  return (
    <div class="min-h-screen w-full bg-background flex flex-col text-text lg:flex-row">
      <Navbar active="home" />
      <main class="w-full flex flex-col px-4 md:px-6 lg:px-10 mt-4 lg:mt-8 gap-10">
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
      </main>
    </div>
  );
};
export default App;
