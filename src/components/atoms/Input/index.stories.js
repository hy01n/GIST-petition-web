import React from 'react';
import InputText from './';

export default {
  title: 'Atoms/InputText',
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

export const Info = Template.bind({});
Info.args = {
  isInfo: true,
};
