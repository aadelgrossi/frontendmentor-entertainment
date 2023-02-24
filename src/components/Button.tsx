import { JSX } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes =
    twMerge(`flex items-center w-full h-12 justify-center p-4 bg-primary rounded-[6px]
  transition-colors font-light gap-2
  hover:bg-white text-white hover:text-surface-main ${props.class}`);

  return <button {...props} class={classes} />;
};

export default Button;
