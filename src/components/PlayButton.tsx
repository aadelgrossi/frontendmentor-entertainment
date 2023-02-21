import Play from '~/icons/Play';
import Heading from './Heading';

const PlayButton = () => {
  return (
    <div class="flex cursor-pointer items-center flex-row p-[9px] rounded-[28px] gap-5 h-12 min-w-[117px] bg-white/25">
      <Play />
      <Heading size="xs">Play</Heading>
    </div>
  );
};

export default PlayButton;
