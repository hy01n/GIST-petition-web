import React from 'react';
import Button from './index.js';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  isPetitionBtn: true,
  ButtonText: '청원하기',
  backgroundColor: '#df3127',
  color: '#fff',
  size: 'large',
};

export const login = Template.bind({});
login.args = {
  ButtonText: '로그인',
  backgroundColor: '#ff7878',
  color: '#fff',
  borderRadius: '5px',
  size: 'large',
  type: 'submit',
};

export const dropDown = Template.bind({});
dropDown.args = {
  isDropDwonBtn: true,
  backgroundColor: '#9a9a9a',
  size: 'large',
  width: '100%',
};
