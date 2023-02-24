import { ParentProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ParentProps {
  class?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const classes =
    twMerge(`flex items-center w-full h-12 justify-center p-4 bg-primary rounded-[6px]
  transition-colors font-light
  hover:bg-white text-white hover:text-surface-main ${props.class}`);

  return (
    <button children={props.children} onClick={props.onClick} class={classes} />
  );
};

export default Button;
