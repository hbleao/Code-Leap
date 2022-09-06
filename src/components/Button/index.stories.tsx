import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '.';
import { ButtonProps } from './types';

export default {
  title: 'Button',
  component: Button,
  args: {
    isDisabled: false,
    isOutline: false
  }
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click here!'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Click here!',
  isDisabled: true
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Click here!',
  isOutline: true
};
