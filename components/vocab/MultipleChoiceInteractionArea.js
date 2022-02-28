import React from 'react'

import { Container, Flex, Button } from '@chakra-ui/react'

const MultipleChoiceInteractionArea = () => {
    return (
        <Container
            m={3}
            bgColor="gray.300"
            borderRadius="md"
            h="100%"
            w="100%"
        >
            <Flex
                justifyContent={"space-evenly"}
            >
                <Button colorScheme="green">〇</Button>
                <Button colorScheme="yellow">△</Button>
                <Button colorScheme="red">✖</Button>
            </Flex>
        </Container>
    )
}

export default MultipleChoiceInteractionArea