import React from 'react';
import SubMenu from './SubMenu';

export default {
  title: 'Molecules/SubMenu',
  component: SubMenu,
};

const Template = (args) => <SubMenu {...args} />;

export const submenu = Template.bind({});
submenu.args = {
  labels: ['홈', '학부 담당자', '학생 제안/민원 처리과정 안내'],
};
