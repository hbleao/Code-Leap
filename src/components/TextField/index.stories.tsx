import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField } from '.';
import { TextFieldProps } from './types';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: '',
    htmlFor: '',
    initialValue: ''
  }
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'name'
};
