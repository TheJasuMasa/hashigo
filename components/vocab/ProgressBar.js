import React from 'react'
import { useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import ProgressUnit from './ProgressUnit'


const ProgressBar = () => {

    useEffect(() => {
        console.log('Reporting from progressbar')
        console.log('Index of 2nd unit')
        console.log('Progress length:', progress.units.length)
    }, [])

    const progress = {
        units: [true, true, false, true, '', '', '', '']
    }

    return (
        <Box
            ms={5}
            maxH={30}
            w={200}
            bgColor={'gray.200'}
            borderRadius={'md'}
            p={0}
        >
            <Flex>
                {progress.units.map((unit) => <ProgressUnit length={200 / progress.units.length} unit={unit} />)}
            </Flex>
        </Box>
    )
}

export default ProgressBar