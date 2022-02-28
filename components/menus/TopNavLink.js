import React from 'react';

import NextLink from 'next/link'

import { Link, Button } from '@chakra-ui/react'

const TopNavLink = ({ text, url, palette }) => {
    return <Button colorScheme={palette}>{text}</Button>
    // <NextLink a={url}><Link>{text}<Link /></NextLink>;
};

export default TopNavLink;
