import React, { useState, useEffect } from 'react'

import VocabCard from './VocabCard'
import CardCounter from './CardCounter'
import ProgressBar from './ProgressBar'

import { motion, AnimatePresence } from 'framer-motion'

import { Flex, IconButton, Spacer } from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'


const CardScroller = () => {

    const cardList = [
        { id: 1, content: { front: 'Hello there', back: 'Hello there back' } },
        { id: 2, content: { front: 'I am a card', back: 'I am the back of a card' } },
        { id: 3, content: { front: 'And this is a card scroller', back: 'this is what a card sroller looks like when you flip' } },
        { id: 4, content: { front: 'This is the last card', back: 'This is the back of the last card' } },
        { id: 5, content: { front: 'Just kidding, this is the last card', back: 'For real the back' } }
    ]


    const [displayCard, setDisplayCard] = useState(0)
    const [isFirst, setIsFirst] = useState(true)
    const [isLast, setIsLast] = useState(false)
    const [fromLeft, setFromLeft] = useState(true)
    const [fromRight, setFromRight] = useState(false)

    const motionVariants = {
        fromLeft: {
            initial: { translateX: -250, opacity: 0, scale: [.8, .5] },
            animate: { translateX: 0, opacity: 1, scale: 1 },
            exit: { translateX: 250, opacity: 0, scale: .8 }
        },
        fromRight: {
            initial: { translateX: 250, opacity: 0, scale: .8 },
            animate: { translateX: 0, opacity: 1, scale: 1 },
            exit: { translateX: -250, opacity: 0, scale: .8 }
        }
    }

    const handleRight = () => {
        setFromLeft(true)
        setFromRight(false)
        setDisplayCard(card => card + 1)
    }

    const handleLeft = () => {
        setFromLeft(false)
        setFromRight(true)
        setDisplayCard(card => card - 1)
    }

    useEffect(() => { }, [fromLeft, fromRight])

    useEffect(() => {
        console.log(displayCard)
        if (displayCard + 1 === cardList.length) {
            setIsLast(true)
        }
        if (displayCard > 0) {
            setIsFirst(false)
        }
        if (displayCard + 1 < cardList.length) {
            setIsLast(false)
        }
        if (displayCard === 0) {
            setIsFirst(true)
        }
    }, [displayCard])


    // useEffect(() => {
    //     if (fromLeft) {
    //         setDisplayCard(card => card - 1)
    //     }
    //     if (fromLeft) {
    //         setDisplayCard(card => card + 1)
    //     }
    // }, [fromLeft, fromRight])

    const MotionFlex = motion(Flex)
    const MotionIconButton = motion(IconButton)

    return (
        <Flex
            flexDir="row"
            w="100vw"
            h="100vh"
        >

            <Spacer />
            <Flex
                flexDir="column"
            >
                <Spacer />
                <MotionIconButton
                    colorScheme={"gray"}
                    icon={<ChevronLeftIcon />}
                    animate={isFirst ? { opacity: 0 } : { opacity: 1 }}
                    initial={isFirst ? { opacity: 1 } : { opacity: 0 }}
                    onClick={isFirst ? () => { } : handleLeft}
                    _hover={isFirst ? { cursor: 'default' } : { cursor: 'pointer' }}
                />
                <Spacer />
            </Flex>
            <Spacer />
            <Flex flexDir="column">
                <Spacer />
                <Flex>
                    <CardCounter max={cardList.length} current={displayCard + 1} />
                    <ProgressBar />
                </Flex>
                <AnimatePresence exitBeforeEnter>
                    {fromRight && (
                        <MotionFlex
                            key={cardList[displayCard].id}
                            variants={motionVariants}
                            initial={motionVariants.fromRight.initial}
                            animate={motionVariants.fromRight.animate}
                            exit={motionVariants.fromRight.exit}
                        ><VocabCard content={cardList[displayCard].content} /></MotionFlex>
                    )
                    }
                    {
                        fromLeft && (
                            <MotionFlex
                                key={cardList[displayCard].id}
                                variants={motionVariants}
                                initial={motionVariants.fromLeft.initial}
                                animate={motionVariants.fromLeft.animate}
                                exit={motionVariants.fromLeft.exit}
                            ><VocabCard content={cardList[displayCard].content} /></MotionFlex>
                        )
                    }
                </AnimatePresence>
                <Spacer />
            </Flex>
            <Spacer />
            <Flex flexDir="column">
                <Spacer />
                <MotionIconButton
                    colorScheme={"gray"}
                    icon={<ChevronRightIcon />}
                    animate={isLast ? { opacity: 0 } : { opacity: 1 }}
                    initial={isLast ? { opacity: 1 } : { opacity: 0 }}
                    onClick={isLast ? () => { } : handleRight}
                    _hover={isLast ? { cursor: 'default' } : { cursor: 'pointer' }}
                />
                <Spacer />
            </Flex>
            <Spacer />
        </Flex >
    )
}

export default CardScroller