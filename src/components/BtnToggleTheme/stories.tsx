import { Meta, Story } from '@storybook/react/types-6-0';
import { BtnToggleTheme } from '.';

export default {
  title: 'BtnToggleTheme',
  component: BtnToggleTheme,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <BtnToggleTheme {...args} />
    </div>
  );
};
