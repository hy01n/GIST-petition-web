import React from 'react';
import PostEditor from './';

export default {
  title: 'Organisms/PostEditor',
  component: PostEditor,
};

const Template = (args) => <PostEditor {...args} />;

export const PostEditor_ = Template.bind({});
PostEditor_.args = {
  isPetitionBtn: true,
  ButtonText: '청원하기',
  backgroundColor: '#df3127',
  color: '#fff',
  size: 'large',
};
