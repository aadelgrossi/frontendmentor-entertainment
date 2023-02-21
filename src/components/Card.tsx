import { Show, createSignal } from 'solid-js';
import BookmarkEmpty from '~/icons/BookmarkEmpty';
import BookmarkFull from '~/icons/BookmarkFull';
import CategoryMovie from '~/icons/CategoryMovie';
import CategoryTv from '~/icons/CategoryTv';
import Heading from './Heading';
import PlayButton from './PlayButton';

interface CardProps {
  title: string;
  year: number;
  category: string;
  rating: string;
  image: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
}

const Divider = () => <span>•</span>;

const Card = (props: CardProps) => {
  const {
    title,
    year,
    category,
    rating,
    image,
    isBookmarked: initialIsBookmarked,
    isTrending,
  } = props;

  const [isBookmarked, setIsBookmarked] = createSignal(initialIsBookmarked);
  const [hovered, setHovered] = createSignal(false);

  const Icon = category === 'Movie' ? CategoryMovie : CategoryTv;

  const toggle = () => setIsBookmarked((state) => !state);

  return (
    <div
      class="flex flex-col relative"
      classList={{
        ['min-w-[164px] md:min-w-[220px] lg:max-w-[280px]']: !isTrending,
        ['min-w-[240px] md:min-w-[470px]']: isTrending,
      }}
    >
      <div class="relative">
        <img
          class="rounded-lg"
          src={image}
          classList={{
            ['aspect-[4/2.5]']: !isTrending,
            ['aspect-[16/9]']: isTrending,
          }}
        />
        <Show when={isTrending}>
          <div class="absolute rounded-lg top-0 right-0 h-full w-full bg-gradient-to-t from-black/90 to-transparent" />
        </Show>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          class="absolute flex items-center justify-center rounded-lg top-0 right-0 hover:bg-black/40 w-full h-full transition-colors"
        >
          <Show when={hovered()}>
            <PlayButton />
          </Show>
        </div>
      </div>
      <div
        id="info"
        class="flex mt-2 flex-col gap-0 text-gray-400 font-light"
        classList={{
          ['absolute bottom-4 left-4 md:bottom-6 md:left-6']: isTrending,
          ['relative']: !isTrending,
        }}
      >
        <span
          class="flex items-center gap-2"
          classList={{
            ['text-sm']: !isTrending,
            ['text-[15px]']: isTrending,
          }}
        >
          {year}
          <Divider />
          <span class="flex items-center gap-2">
            {<Icon class="[&>path]:fill-gray-300" />} {category}
          </span>
          <Divider />

          {rating}
        </span>
        <h5
          class="text-text text-lg font-medium"
          classList={{
            ['lg:text-2xl']: isTrending,
          }}
        >
          {title}
        </h5>
      </div>

      <button
        onClick={toggle}
        class="absolute top-2 right-2 md:top-4 md:right-4"
      >
        <div class="bg-surface-main/50 w-8 h-8 rounded-full flex items-center justify-center">
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
