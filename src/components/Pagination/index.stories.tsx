import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pagination } from '.';
import { PaginationProps } from './types';

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    activePage: 1,
    totalPages: 10,
    total: 1000,
    onClick: () => null
  }
} as Meta;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Default = Template.bind({});
