import { React, useState, useEffect } from "react";
import {
  Flex,
  Text,
  Container,
  IconButton,
  Spacer,
  Box,
  Icon,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

//Remove after deleted
import VocabCardFront from "../../components/vocab/VocabCardFront";
import VocabCardBack from "../../components/vocab/VocabCardBack";

import {
  motion,
  useAnimation,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

import useSound from "use-sound";

const flipSounds = [
  "/static/flip1.mp3",
  "/static/flip2.mp3",
  "/static/flip3.mp3",
  "/static/flip4.mp3",
  "/static/flip5.mp3",
];

const VocabCard = ({ content }) => {
  //Sound Stuff//

  const [sound, setSound] = useState(flipSounds[0]);
  const [play] = useSound(sound);

  const setRandomSound = () => {
    setSound(flipSounds[Math.round(Math.random() * flipSounds.length)]);
  };

  // End Sound Stuff //

  //Animation Stuff//

  const MotionFlex = motion(Flex);

  const faceVariants = {
    hide: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
  };

  const cardVariants = {
    rotateLeftFirst: {
      rotateY: [0, 90],
      scale: [1, 1.1],
      opacity: [1, 0],
      //   translateX: [-50, 0, 50],
      transition: {
        duration: 0.25,
      },
    },
    rotateLeftSecond: {
      rotateY: [90, 0],
      scale: [1.1, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.25,
      },
    },
    rotateRightFirst: {
      rotateY: [0, 90],
      scale: [1, 1.1],
      opacity: [1, 0],
      transition: {
        duration: 0.25,
      },
    },
    rotateRightSecond: {
      rotateY: [-90, 0],
      scale: [1.1, 1],
      opacyity: [0, 1],
      transition: {
        duration: 0.25,
      },
    },
  };

  const cardControl = useAnimation();
  const frontControl = useAnimation();
  const backControl = useAnimation();

  // End Animation Stuff//

  //State Stuff//

  const [isFront, setIsFront] = useState("initial");

  const flipCard = async () => {
    if (isFront === "inital") {
      setIsFront(false);
    } else if (isFront) {
      console.log("flipping right");
      setIsFront(!isFront);
    } else {
      console.log("flipping left");
      setIsFront(!isFront);
    }
  };

  const cardFlipHandler = () => {
    flipCard();
    console.log("Flipping card");
    // play()
    // setRandomSound()
  };

  useEffect(() => {
    console.log("State report");
    console.table([isFront]);
  }, [isFront]);

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {isFront && isFront !== "initial" && (
        <MotionFlex
          key="initial"
          h="500px"
          w="320px"
          variants={cardVariants}
          animate={"rotateLeftFirst"}
          exit={"rotateLeftSecond"}
          initial={false}
          justifyContent="center"
          bg="#EEE"
          minH="200px"
          minW="125px"
          outline="solid 2px #CCC"
          borderRadius={"md"}
          boxShadow="md"
          m={5}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex flexDir={"column"}>
            <Text mt={3}>
              {isFront ? (
                <VocabCardFront
                  content={content}
                  layoutId="cardFace"
                  animate={frontControl}
                  face={isFront}
                />
              ) : (
                <VocabCardBack
                  content={content}
                  layoutId="cardFace"
                  animate={backControl}
                  face={isFront}
                />
              )}
            </Text>
            <Spacer />
            <Box>
              <IconButton
                mb={3}
                variant="outline"
                colorScheme={"white"}
                icon={<RepeatIcon />}
                onClick={cardFlipHandler}
              />
            </Box>
          </Flex>
        </MotionFlex>
      )}
      {isFront && isFront === "initial" && (
        <MotionFlex
          key="front"
          h="500px"
          w="320px"
          variants={cardVariants}
          animate={false}
          exit={"rotateLeftFirst"}
          initial={false}
          justifyContent="center"
          bg="#EEE"
          minH="200px"
          minW="125px"
          outline="solid 2px #CCC"
          borderRadius={"md"}
          boxShadow="md"
          m={5}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex flexDir={"column"}>
            <Text mt={3}>
              {isFront ? (
                <VocabCardFront
                  content={content}
                  layoutId="cardFace"
                  animate={frontControl}
                  face={isFront}
                />
              ) : (
                <VocabCardBack
                  content={content}
                  layoutId="cardFace"
                  animate={backControl}
                  face={isFront}
                />
              )}
            </Text>
            <Spacer />
            <Box>
              <IconButton
                mb={3}
                variant="outline"
                colorScheme={"white"}
                icon={<RepeatIcon />}
                onClick={cardFlipHandler}
              />
            </Box>
          </Flex>
        </MotionFlex>
      )}
      {!isFront && (
        <MotionFlex
          key="back"
          h="500px"
          w="320px"
          variants={cardVariants}
          initial={"rotateRightFirst"}
          animate={"rotateRightSecond"}
          exit={"rotateLeftFirst"}
          justifyContent="center"
          bg="#EEE"
          minH="200px"
          minW="125px"
          outline="solid 2px #CCC"
          borderRadius={"md"}
          boxShadow="md"
          m={5}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex flexDir={"column"}>
            <Text mt={3}>
              {isFront ? (
                <VocabCardFront
                  content={content}
                  layoutId="cardFace"
                  animate={frontControl}
                  face={isFront}
                />
              ) : (
                <VocabCardBack
                  content={content}
                  layoutId="cardFace"
                  animate={backControl}
                  face={isFront}
                />
              )}
            </Text>
            <Spacer />
            <Box>
              <IconButton
                mb={3}
                variant="outline"
                colorScheme={"white"}
                icon={<RepeatIcon />}
                onClick={cardFlipHandler}
              />
            </Box>
          </Flex>
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default VocabCard;
