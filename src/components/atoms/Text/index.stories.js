import React from 'react';
import Text from './';

export default {
  title: 'Atoms/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  text: 'Text',
  color: '#333',
};
