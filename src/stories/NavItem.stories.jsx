import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MdHome, MdLeaderboard } from 'react-icons/md';
import PropTypes from 'prop-types';
import NavItem from '../components/NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['MdHome', 'MdLeaderboard'],
    },
    children: { control: 'text' },
    link: {
      control: 'select',
      options: ['/', '/leaderboards'],
    },
  },
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
};

const iconMap = {
  MdHome: <MdHome className="w-6 h-6" />,
  MdLeaderboard: <MdLeaderboard className="w-6 h-6" />,
};

function Template({ icon, ...args }) {
  return <NavItem icon={iconMap[icon]} {...args} />;
}

export const Home = Template.bind({});
Home.args = {
  icon: 'MdHome',
  children: 'Home',
  link: '/',
};

export const Leaderboard = Template.bind({});
Leaderboard.args = {
  icon: 'MdLeaderboard',
  children: 'Leaderboards',
  link: '/leaderboards',
};

Template.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.string.isRequired,
};
