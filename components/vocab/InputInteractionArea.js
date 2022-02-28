import React from 'react'

import { Container, Flex, Input } from '@chakra-ui/react'

const InputInteractionArea = () => {
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
                <Input />
            </Flex>
        </Container>
    )
}

export default InputInteractionArea