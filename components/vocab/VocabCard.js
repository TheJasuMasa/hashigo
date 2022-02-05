import { React, useState } from 'react';
import { Flex, Text, Container, IconButton, Spacer } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

import { motion } from 'framer-motion'



const VocabCard = ({ content }) => {

    const MotionFlex = motion(Flex)
    return (

        <MotionFlex
            justifyContent="center"
            bg="tomato"
            h="200px"
            w="125px"
            borderRadius={'md'}
            boxShadow='md'
            m={5}
            color="white"
            whileHover={{
                scale: 1.1,
                boxShadow: 'lg',
                transition: { duration: .5 }
            }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            _hover={{
                cursor: 'pointer'
            }}
        >
            <Container>
                <Text>
                    {content}
                </Text>
                <Spacer />
                <IconButton
                    variant='outline'
                    colorScheme={'white'}
                    icon={<RepeatIcon />} />
            </Container>
        </MotionFlex>

    );
};

export default VocabCard;
