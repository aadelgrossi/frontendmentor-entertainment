import { debounce } from '@solid-primitives/scheduled';
import { createSignal } from 'solid-js';

const createSearchInput = () => {
  const [query, setQueryInput] = createSignal('');
  const setQuery = debounce((value: string) => setQueryInput(value), 500);

  return { query, setQuery };
};

export default createSearchInput;
