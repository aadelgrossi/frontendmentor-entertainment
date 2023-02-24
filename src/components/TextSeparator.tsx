import { ParentProps } from 'solid-js';

const TextSeparator = (props: ParentProps) => {
  return (
    <div class="flex gap-4 items-center">
      <hr class="h-[1px] w-full border-t-0 bg-white/60" />
      <span class="w-full text-white/60 font-light whitespace-nowrap">
        {props.children}
      </span>
      <hr class="h-[1px] w-full border-t-0 bg-white/60" />
    </div>
  );
};

export default TextSeparator;
