import { React, useState, useEffect } from 'react';
import { Flex, Text, Container, IconButton, Spacer, Box, Icon } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'


//Remove after deleted
import VocabCardFront from '../../components/vocab/VocabCardFront'
import VocabCardBack from '../../components/vocab/VocabCardBack'

import { animate, motion, useAnimation, AnimatePresence } from 'framer-motion'

import useSound from 'use-sound'


const flipSounds = ['/static/flip1.mp3', '/static/flip2.mp3', '/static/flip3.mp3', '/static/flip4.mp3', '/static/flip5.mp3']

const VocabCard = ({ content }) => {

    //Sound Stuff//

    const [sound, setSound] = useState(flipSounds[0])
    const [play] = useSound(sound)

    const setRandomSound = () => {
        setSound(flipSounds[Math.round(Math.random() * flipSounds.length)]);
    }

    // End Sound Stuff //

    //Animation Stuff//

    const MotionFlex = motion(Flex)

    const flipVariants = {
        doNothing: {},
        rotateLeft: {
            rotateY: [0, 90, 45, 0],
            duration: .5,
            scale: [1, 1.1, 1],
        },
        rotateRight: {
            rotateY: [0, -90, -45, 0],
            duration: .5,
            scale: [1, 1.1, 1],
        }
    }

    const animation = useAnimation()

    // End Animation Stuff//

    //State Stuff//

    const [isFlipped, setIsFlipped] = useState(false)
    const [isFirstFlip, setIsFirstFlip] = useState(true)
    const [showFlip, setShowFlip] = useState(false)

    const flipCard = () => {
        setIsFlipped(!isFlipped)
        setIsFirstFlip(false)
    }

    const cardFlipHandler = () => {
        flipCard()
        play()
        setRandomSound()
    }

    useEffect(() => {
        if (isFirstFlip) {
            console.log('not Animating')
        }
        if (isFlipped) {
            animation.start(flipVariants.rotateRight)
            console.log('animating rotate Right')
        }
        if (!isFlipped) {
            animation.start(flipVariants.rotateLeft)
            console.log('animating rotate Left')
        }

    }, [isFlipped])

    // useEffect(() => {
    //     setTimeout(() => { setShowFlip(!showFlip) }, 1500)
    // }, [isFlipped]);
    //End State Stuff

    return (
        <MotionFlex
            h="500px"
            w="300px"
            variants={flipVariants}
            animate={animation}
            justifyContent="center"
            bg="#EEE"
            minH="200px"
            minW="125px"
            outline="solid 2px #CCC"
            borderRadius={'md'}
            boxShadow='md'
            m={5}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            _hover={{
                cursor: 'pointer'
            }}
        >
            <Flex
                flexDir={'column'}
            >
                <Text
                    mt={3}
                >
                    {showFlip ? <VocabCardBack content={content} /> : <VocabCardFront content={content} />}
                </Text>
                <Spacer />
                <Box>
                    <IconButton
                        mb={3}
                        variant='outline'
                        colorScheme={'white'}
                        icon={<RepeatIcon />}
                        onClick={cardFlipHandler}
                    />
                </Box>
            </Flex>
        </MotionFlex>

    );
};

export default VocabCard;
