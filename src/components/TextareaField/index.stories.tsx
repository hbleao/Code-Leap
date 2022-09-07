import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextareaField } from '.';
import { TextareaFieldProps } from './types';

export default {
  title: 'TextareaField',
  component: TextareaField,
  args: {
    rows: 10
  }
} as Meta;

const Template: Story<TextareaFieldProps> = args => <TextareaField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'description'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Description',
  placeholder: 'short description'
};
