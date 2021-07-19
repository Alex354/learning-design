import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button label="Button" />;
};

export const Default = Template.bind({});
