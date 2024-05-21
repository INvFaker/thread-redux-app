import React from 'react';
import CategoryItem from '../components/CategoryItem';

export default {
  title: 'Components/CategoryItem',
  component: CategoryItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
    },
    isActive: { control: 'boolean' },
    children: { control: 'text' },
  },
};

function Template(args) {
  return <CategoryItem {...args} />;
}

const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  isActive: false,
  children: 'Filled Category',
};

const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  isActive: false,
  children: 'Outline Category',
};

export { Filled, Outline };
