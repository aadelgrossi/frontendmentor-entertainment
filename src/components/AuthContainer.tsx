import { ParentProps } from 'solid-js';
import Heading from './Heading';

interface AuthContainerProps extends ParentProps {
  title?: string;
}

const AuthContainer = (props: AuthContainerProps) => {
  return (
    <div class="flex w-full flex-col bg-surface-main p-8 rounded-[20px] md:max-w-[400px]">
      <Heading size="lg">{props.title}</Heading>
      {props.children}
    </div>
  );
};

export default AuthContainer;
