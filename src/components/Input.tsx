import { JSX, Show } from 'solid-js';

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  size?: 'md' | 'lg';
  error?: string;
  variant?: 'ghost' | 'border';
}

const Input = (props: InputProps) => {
  return (
    <div class="flex gap-6 h-[37px] items-start relative">
      <Show when={props.icon}>
        <span class="flex items-center h-full">{props.icon}</span>
      </Show>
      <input
        class="bg-background w-full transition-[border] ease-in-out
        border-transparent border-2 pb-[18px] focus:outline-none focus:border-b-secondary
        font-light text-text caret-primary"
        classList={{
          ['border-b-secondary focus:border-b-text px-4']:
            props.variant === 'border',
          ['border-b-primary focus:border-b-primary']: Boolean(props?.error),
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
