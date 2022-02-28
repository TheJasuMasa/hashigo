import React from 'react';

import { Flex, Text, Divider, Heading, Button } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import SidebarNavItem from './SidebarNavItem';
import MenuSelector from './MenuSelector'

import sidebarStyles from './styles/sidebar.module.css'

const Sidebar = () => {

  const menuItems = [{
    id: 1,
    name: 'Articles',
    url: '',
    iconUrl: ''
  },
  {
    id: 2,
    name: 'Videos',
    url: '',
    iconUrl: ''
  },
  {
    id: 3,
    name: 'Vocabulary',
    url: '',
    iconUrl: ''
  },
  {
    id: 4,
    name: 'Podcasts',
    url: '',
    iconUrl: ''
  },
  {
    id: 5,
    name: 'Quizzes',
    url: '',
    iconUrl: ''
  }]

  return (
    <Flex
      boxShadow="lg"
      flexDir="column"
      justifyContent="space-between"
      height="100vh"
      pos="fixed"
      top={0}
      w={200}
      bg="blue.200"
    >
      <Flex
        flexDir="column"
      >
        <MenuSelector menuItems={menuItems} currentMenu={'Select'} />
        <SidebarNavItem navText={'単語帳'} icon={<ChatIcon />} />
        <SidebarNavItem navText={'Button 2'} />
        <SidebarNavItem navText={'Button 3'} />
      </Flex>
    </Flex >
  );
};

export default Sidebar