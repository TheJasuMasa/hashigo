import React from "react";

import { React, useState, useEffect } from "react";

import {
  motion,
  useAnimation,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

import { Flex } from "@chakra-ui/react";

import VocabCard from "./VocabCard";

const CardControl = () => {
  return (
    <Flex>
      <VocabCard />
    </Flex>
  );
};

export default CardControl;
