import { ParentProps } from 'solid-js';

interface ButtonProps extends ParentProps {
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      children={props.children}
      onClick={props.onClick}
      class="flex items-center w-full h-12 justify-center p-4 bg-primary rounded-[6px]
      transition-colors font-light
      hover:bg-white text-white hover:text-surface-main"
    />
  );
};

export default Button;
