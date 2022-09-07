import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal } from '.';
import { ModalProps } from './types';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    content: {
      type: 'symbol'
    }
  }
} as Meta;

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <h2>Modal heading</h2>,
  isOpen: false
};

export const Opened = Template.bind({});
Opened.args = {
  content: <h2>Modal heading</h2>,
  isOpen: true
};
