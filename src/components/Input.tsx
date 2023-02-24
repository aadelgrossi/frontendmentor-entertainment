import { JSX, Show } from 'solid-js';

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  size?: 'md' | 'lg';
  error?: string;
  variant?: 'ghost' | 'border';
}

const Input = (props: InputProps) => {
  const hasError = Boolean(props?.error);

  return (
    <div class="flex gap-6 items-start relative">
      <Show when={props.icon}>
        <span class="flex items-center h-full">{props.icon}</span>
      </Show>
      <input
        class="bg-background w-full transition-[border] ease-in-out
        border-transparent border-2 pb-[18px] focus:outline-none focus:border-b-secondary
        font-light text-text caret-primary"
        classList={{
          ['focus:border-b-secondary']: !hasError,
          ['bg-transparent px-4']: props.variant === 'border',
          ['border-b-secondary focus:border-b-white']:
            props.variant === 'border',
          ['border-b-primary focus:border-b-primary']:
            props.variant === 'border' && hasError,
          ['text-2xl']: props.size === 'lg',
          ['text-[15px]']: props.size === 'md',
        }}
        {...props}
      />
      <Show when={props.error}>
        <span class="absolute text-primary right-0 top-1 font-light text-[13px]">
          {props.error}
        </span>
      </Show>
    </div>
  );
};

export default Input;
