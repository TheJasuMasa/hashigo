import React from 'react'

import { Text, Flex, Spacer, Button, Icon } from '@chakra-ui/react'
import { ArrowUpIcon, SettingsIcon, CheckIcon } from '@chakra-ui/icons'
import { HiOutlineSpeakerphone, HiSpeakerphone } from 'react-icons/hi'

import MultipleChoiceInteractoinArea from './MultipleChoiceInteractionArea'

const VocabCardBack = ({ content }) => {
    return (
        <>
            <Flex
                justifyContent={'space-between'}
                flexDirection={'column'}
                h="100%"
            >
                <Flex
                    flexDirection="row"
                    justifyContent={'space-around'}
                >
                    <Icon as={HiSpeakerphone} />
                    <ArrowUpIcon />
                    <SettingsIcon />
                    <CheckIcon />
                </Flex>
                <Spacer />
                <Text
                    m="2em"
                >{content.back}</Text>
                <Spacer />
                <Flex
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                >
                    <Flex
                        w="100%"
                        p="1em"
                        justifyContent={"space-between"}
                    >
                        <MultipleChoiceInteractoinArea />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default VocabCardBack