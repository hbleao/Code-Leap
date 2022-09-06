import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Post } from '.';
import { PostProps } from './types';

export default {
  title: 'Post',
  component: Post,
  args: {
    id: 1234345645678,
    username: '@Henrique',
    title: 'How to create a component in react?',
    content: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    created_datetime: '2022-09-06T04:11:13.301945Z'
  }
} as Meta;

const Template: Story<PostProps> = args => <Post {...args} />;

export const Default = Template.bind({});
