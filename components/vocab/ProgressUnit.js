import React from 'react'

import { useEffect } from 'react'

import { Box } from '@chakra-ui/react'
const ProgressUnit = ({ unit, length, index }) => {

    const handleColor = (val) => {
        switch (val) {
            case true:
                return 'green.300'
            case false:
                return 'red.300'
            case '':
                return 'gray.500'
            default:
                return 'yellow.300'
        }
    }

    useEffect(() => {
        console.log('Reporting from progressUnit')
        console.log('Progress unit length:', length)
        console.log('Progress unit index:', index)
    }, [])

    return (
        <Box
            minH={30}
            minW={`${length}px`}
            bgColor={handleColor(unit)}
            outlineRight='1px solid gray.500'
        ></Box>
    )
}

export default ProgressUnit