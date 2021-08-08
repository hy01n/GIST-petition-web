import React from 'react';
import Card from './';

export default {
  title: 'Atoms/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
