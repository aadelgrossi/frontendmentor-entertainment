import { ParentProps, For } from 'solid-js';
import Heading from './Heading';

interface SectionProps extends ParentProps {
  title?: string;
}
const Section = (props: SectionProps) => {
  return (
    <div class="flex flex-col w-full gap-6 lg:gap-8 relative">
      <Heading size="lg">{props?.title || 'Recommended for you'}</Heading>
      {props.children}
    </div>
  );
};

export default Section;
