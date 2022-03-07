import { React, useState, useEffect } from 'react';
import { Flex, Text, Container, IconButton, Spacer, Box, Icon } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'


//Remove after deleted
import VocabCardFront from '../../components/vocab/VocabCardFront'
import VocabCardBack from '../../components/vocab/VocabCardBack'

import { motion, useAnimation, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

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

    const variants = {
        rotateLeftFirst: {
            rotateY: [0, 90],
            scale: [1, 1.1, 1],
            translateX: [-50, 0, 50],
            transition: {
                duration: .25
            }
        },
        rotateLeftSecond: {
            rotateY: [45, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: .25
            }
        },
        rotateRight: {
            rotateY: [0, -90, -45, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: .5
            }
        }
    }

    const control = useAnimation()

    // End Animation Stuff//

    //State Stuff//

    const [isFront, setIsFront] = useState('initial')
    const [showFlip, setShowFlip] = useState(false)

    const flipCard = async () => {
        if (isFront === 'inital') {
            await control.start(variants.rotateLeftFirst)
            setIsFront(false)
            await control.start(variants.rotateLeftSecond)
        } else if (isFront) {
            await control.start(variants.rotateRight)
            console.log('flipping right')
            setIsFront(!isFront)
        } else {
            await control.start(variants.rotateRight)
            console.log('flipping left')
            setIsFront(!isFront)
        }
    }

    const cardFlipHandler = () => {
        flipCard()
        console.log('Flipping card')
        // play()
        // setRandomSound()
    }

    useEffect(() => {
        console.log('State report')
        console.table([isFront])
    }, [isFront])

    // useEffect(() => {
    //     if (isFront && isFront !== 'initial') {
    //         () => control.start('rotateRight')
    //         console.log('animating rotate Right')
    //     }
    //     if (!isFront) {
    //         () => control.start('rotateLeft')
    //         console.log('animating rotate Left')
    //     }

    // }, [isFront])



    return (
        <MotionFlex
            h="500px"
            w="320px"
            variants={variants}
            animate={control}
            initial={false}
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
                    <AnimateSharedLayout type="crossfade">
                        {isFront ?
                            <VocabCardFront content={content} layoutId="cardFace" /> : <VocabCardBack content={content} layoutId="cardFace" />}
                    </AnimateSharedLayout>
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
