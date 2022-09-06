import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextareaField } from '.';
import { TextareaFieldProps } from './types';

export default {
  title: 'TextareaField',
  component: TextareaField,
  args: {
    rows: 10,
    label: '',
    htmlFor: '',
    initialValue: ''
  }
} as Meta;

const Template: Story<TextareaFieldProps> = args => <TextareaField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'description'
};
