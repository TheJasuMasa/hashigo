import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react'

import { motion } from 'framer-motion'



const SidebarNavItem = ({ navText, icon }) => {
  const MotionBox = motion(Box)
  return (
    <MotionBox
      bg="blue.300"
      whileHover={{
        translateX: 10,
        scale: 1.1,
        transition: { duration: .5 },
        backgroundColor: "#4299E1"
      }}
      whileTap={{
        scale: 1,
        backgroundColor: "#2C5282",
        color: "#DDD",
        outline: "2px solid white"
      }}
      _hover={{
        cursor: "pointer",
      }}
      borderRadius="md"
      mx={5}
      p={4}
      mt={2}
    >
      <Flex
        flexDir="row"
        justifyContent={"space-evenly"}
      >
        {icon}
        <Text>{navText}</Text>
      </Flex>
    </MotionBox>
  );
};

export default SidebarNavItem;
