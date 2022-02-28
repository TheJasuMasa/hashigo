import React from 'react'
import { useState, useEffect } from 'react'

import { Box, Button, Flex } from '@chakra-ui/react'

import { motion, useAnimation } from 'framer-motion'

const FramerTest = () => {

    const MotionBox = motion(Box)

    const [direction, setDirection] = useState('center')

    // const testVariants = {
    //     moveLeft: {
    //         translateX: -5,
    //         duration: .3,
    //     },
    //     moveRight: {
    //         translateX: 5,
    //         duration: .3,
    //     }
    // }

    const handleLeft = () => {
        setDirection('left')
    }

    const handleRight = () => {
        setDirection('right')
    }

    const controls = useAnimation()

    useEffect(() => {

        if (direction === 'left') {
            controls.start({ translateX: -20 })
        } else if (direction === 'right') {
            controls.start({ translateX: 20 })
        }
    }, [direction])

    return (
        <Flex
            flexDir={"column"}
        >
            <MotionBox
                borderRadius="50%"
                bgColor="teal"
                h="50px"
                w="50px"
                animate={controls}
            >

            </MotionBox>
            <Flex flexDir={"row"}>
                <Button onClick={handleLeft}>←</Button>
                <Button onClick={handleRight}>→</Button>
                <Flex>{direction}</Flex>
            </Flex>
        </Flex >
    )
}

export default FramerTest