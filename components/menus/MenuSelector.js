import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Text
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const MenuSelector = ({ currentMenu, menuItems }) => {
    return (
        <Menu>
            <MenuButton m={2} as={Button} rightIcon={<ChevronDownIcon />}>{currentMenu}</MenuButton>
            <MenuList>
                {menuItems.map((menuItem) => (<MenuItem key={`${menuItem.id}`}>{menuItem.name}</MenuItem>))}
            </MenuList>
        </Menu>
    )
}

export default MenuSelector