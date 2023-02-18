import type { Component } from 'solid-js';
import Heading from './components/Heading';

import './index.css';

const App: Component = () => {
  return (
    <div class="h-screen bg-background">
      <Heading size="lg">My entertainment web app</Heading>
    </div>
  );
};
export default App;
