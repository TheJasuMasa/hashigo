import React from 'react';

import { Box, Flex } from '@chakra-ui/react'

import TopNavLink from './TopNavLink'

const TopNavbar = () => {
    return (
        <Box
            h="66px"
            m="0"
            bgColor={"purple.300"}
            p='0.75em'
        >
            <Flex
                justifyContent={"space-between"}
            >
                <TopNavLink text="Hashigo" url="#" palette="white" />
                <Flex
                    justifyContent={"space-evenly"}
                    w="500px"
                >
                    <TopNavLink text="About" url="#" palette="purple" />
                    <TopNavLink text="Log In" url="#" palette="purple" />
                    <TopNavLink text="Sign Up" url="#" palette="green" />
                </Flex>
            </Flex>
        </Box>
    )
};

export default TopNavbar;
