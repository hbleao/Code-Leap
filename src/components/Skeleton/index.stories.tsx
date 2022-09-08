import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Skeleton } from '.';
import { SkeletonProps } from './types';

export default {
  title: 'Skeleton',
  component: Skeleton
} as Meta;

const Template: Story<SkeletonProps> = args => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Skeleton {...args} />
    <Skeleton {...args} />
    <Skeleton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 10,
  height: 10,
  borderRadius: 0.5
};
