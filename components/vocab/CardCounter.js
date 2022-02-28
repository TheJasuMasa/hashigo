import React from 'react'
import { useEffect } from 'react'

import { Box, Text } from '@chakra-ui/react'

const CardCounter = ({ current, max }) => {
    return (
        <Box
            bg={"gray.300"}
            p={"3"}
            borderRadius={"50%"}
        >
            <Text>{current}/{max}</Text>
        </Box>
    )
}

export default CardCounter