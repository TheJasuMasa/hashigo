import React from 'react'
import FramerTest from '../../components/test/FramerTest'

import { Heading } from '@chakra-ui/react'

import CardScroller from '../../components/vocab/CardScroller'
import TopNavBar from '../../components/menus/TopNavbar'

const motionTest = () => {
    return (
        <>
            <TopNavBar />
            <CardScroller />
        </>
    )
}

export default motionTest