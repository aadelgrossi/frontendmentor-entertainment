import { Show, createSignal } from 'solid-js';
import BookmarkEmpty from '../icons/BookmarkEmpty';
import BookmarkFull from '../icons/BookmarkFull';
import CategoryMovie from '../icons/CategoryMovie';
import CategoryTv from '../icons/CategoryTv';
import Heading from './Heading';

interface CardProps {
  title: string;
  year: number;
  category: string;
  rating: string;
  image: string;
  isBookmarked?: boolean;
}

const Card = (props: CardProps) => {
  const {
    title,
    year,
    category,
    rating,
    image,
    isBookmarked: initialIsBookmarked,
  } = props;

  const [isBookmarked, setIsBookmarked] = createSignal(initialIsBookmarked);

  const Icon = category === 'Movie' ? CategoryMovie : CategoryTv;

  const toggle = () => setIsBookmarked((state) => !state);

  return (
    <div
      class="flex flex-col relative
      min-w-[164px] md:min-w-[220px] lg:min-w-[280px]
      "
    >
      <img src={image} class="rounded-lg" />
      <div id="info" class="flex mt-2 flex-col gap-0 text-gray-300">
        <span class="flex items-center gap-3 text-sm">
          {year}
          <span class="flex items-center gap-2">
            •{<Icon class="[&>path]:fill-gray-300" />} {category} •
          </span>{' '}
          {rating}
        </span>
        <Heading size="xs">{title}</Heading>
      </div>

      <button
        onClick={toggle}
        class="absolute top-2 right-2 md:top-4 md:right-4"
      >
        <div class="bg-secondary/50 w-8 h-8 rounded-full flex items-center justify-center">
          <Show when={isBookmarked()}>
            <BookmarkFull />
          </Show>
          <Show when={!isBookmarked()}>
            <BookmarkEmpty />
          </Show>
        </div>
      </button>
    </div>
  );
};

export default Card;
