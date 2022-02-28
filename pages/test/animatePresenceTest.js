import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

import React, { useState } from 'react'

const animatePresenceTest = () => {

    const [showCircle, setShowCircle] = useState(true);
    setTimeout(() => { setShowCircle(false) }, 4000)

    const MotionBox = motion(Box)
    return (
        <>
            <AnimatePresence>
                {showCircle && (
                    <MotionBox
                        bg="tomato"
                        borderRadius="50%"
                        h={50}
                        w={50}
                        initial={{
                            x: 300, opacity: 0
                        }}
                        animate={{
                            x: 50, opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                    >
                    </MotionBox>
                )}
            </AnimatePresence>
        </>
    )
}

export default animatePresenceTest