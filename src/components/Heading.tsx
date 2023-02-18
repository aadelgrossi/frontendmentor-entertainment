import { ParentProps } from 'solid-js';

interface HeadingProps extends ParentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Heading = (props: HeadingProps) => {
  return (
    <h1
      classList={{
        ['text-text']: true,
        ['text-lg font-medium']: props.size === 'xs',
        ['text-2xl font-medium']: props.size === 'sm',
        ['text-2xl font-light']: props.size === 'md',
        ['text-[32px] font-light']: props.size === 'lg',
      }}
    >
      {props.children}
    </h1>
  );
};

export default Heading;
