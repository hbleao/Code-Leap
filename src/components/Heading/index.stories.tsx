import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading } from '.';
import { HeadingProps } from './types';

export default {
  title: 'Heading',
  component: Heading
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'heading',
  color: 'black'
};

export const White = Template.bind({});
White.args = {
  children: 'heading',
  color: 'white'
};

White.parameters = {
  backgrounds: {
    default: 'dark'
  }
};
