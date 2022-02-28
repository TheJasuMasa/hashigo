import React from 'react'
import { Text } from '@chakra-ui/react'

const VocabCardFront = ({ content }) => {
    return (
        <Text>{content.front}</Text>
    )
}

export default VocabCardFront