import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Search } from '.';

export default {
  title: 'Search',
  component: Search
} as Meta;

const Template: Story = args => <Search {...args} />;

export const Default = Template.bind({});
