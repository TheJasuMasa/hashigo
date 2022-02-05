import { Button, Container, styled } from '@chakra-ui/react'

import VocabCard from '../../components/vocab/VocabCard';

import { motion } from 'framer-motion'

import { Box } from '@chakra-ui/react'


const CardTest = () => {

    const MotionBox = motion(Box)

    const cardContent = {
        front: 'I am front',
        back: 'I am back'
    }

    return (
        <>
            <Container>
                <VocabCard content={cardContent.front} />
            </Container>
        </>
    );
};

export default CardTest;
