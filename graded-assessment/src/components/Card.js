import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack
        align="initial"
        color="black"
        background="white"
        borderRadius="lg"
      >
        <Image src={imageSrc} alt={title} borderRadius="lg"/>
        <Heading padding={2} size="md">{title}</Heading>
        <Text padding={2} color="gray.600">{description}</Text>
        <HStack padding={2}>
          <Text as='b'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
