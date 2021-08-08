import React from 'react';
import MainMenu from './MainMenu';

export default {
  title: 'Molecules/MainMenu',
  component: MainMenu,
};

const Template = (args) => <MainMenu {...args} />;

export const small = Template.bind({});
small.args = {
  fontSize: 'small',
  navLinkColor: '#df3127',
  labels: ['청원하기', '모든 청원', '나의 청원', '건의함 모아보기'],
};

export const medium = Template.bind({});
medium.args = {
  fontSize: 'medium',
  navLinkColor: '#df3127',
  labels: ['청원하기', '모든 청원', '나의 청원', '건의함 모아보기'],
};

export const large = Template.bind({});
large.args = {
  fontSize: 'large',
  navLinkColor: '#df3127',
  labels: ['청원하기', '모든 청원', '나의 청원', '건의함 모아보기'],
};
