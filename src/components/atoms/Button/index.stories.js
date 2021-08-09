import React from 'react';
import Button from './';

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

export const acceptBtnProps = Template.bind({});
acceptBtnProps.args = {
  ButtonText: '동의',
  width: '120px',
  height: '60px',
  size: 'large',
};

export const indexBtnProps = Template.bind({});
indexBtnProps.args = {
  ButtonText: '목록',
  borderColor: '2px solid #dedede',
  backgroundColor: '#f3f3f3',
  color: '#333',
  width: '120px',
  size: 'large',
};

export const approveCommentBtnProps = Template.bind({});
approveCommentBtnProps.args = {
  isAcptCmntBtn: 'Yes!!',
  ButtonText: '동의 내용 보기',
  color: '#333',
  borderColor: '2px solid #dedede',
  backgroundColor: '#f3f3f3',
  size: 'large',
};

export const pageNumBtnProps = Template.bind({});
pageNumBtnProps.args = {
  ButtonText: '25',
  color: '#333',
  borderColor: '1px solid #dedede;',
  backgroundColor: 'white',
  size: 'small',
};
