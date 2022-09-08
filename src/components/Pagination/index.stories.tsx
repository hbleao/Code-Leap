import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pagination } from '.';

export default {
  title: 'Pagination',
  component: Pagination
} as Meta;

const Template: Story = args => <Pagination {...args} />;

export const Default = Template.bind({});
