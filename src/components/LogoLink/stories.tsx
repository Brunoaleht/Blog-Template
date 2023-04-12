import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    imgUrl: 'assets/images/I-am.jfif',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    imgUrl: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  imgUrl: '',
};
