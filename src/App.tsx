import type { Component } from 'solid-js';
import Heading from './components/Heading';
import Input from './components/Input';

import './index.css';

import search from './assets/icon-search.svg';

const App: Component = () => {
  return (
    <div class="h-screen bg-background px-10 flex flex-col gap-8">
      <Heading size="lg">My entertainment web app</Heading>
      <Input placeholder="Search for Movies or TV Shows" />
      <Input
        size="lg"
        icon={<img src={search} width="24px" height="24px" />}
        placeholder="Search for Movies or TV Shows"
      />
      <Input
        placeholder="Search for Movies or TV Shows"
        error="Can't be empty"
      />
      <Input variant="border" placeholder="Email address" />
    </div>
  );
};
export default App;
