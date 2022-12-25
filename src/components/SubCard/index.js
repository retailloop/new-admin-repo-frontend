import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCard = ({ title, description, pricing }) => {
  return (
    <Box
      p={"16px"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      maxWidth={"232px"}
      maxH={"240px"}
    >
      <Text
        mb={"8px"}
        mt={"25px"}
        fontSize={"14px"}
        fontWeight={600}
        textTransform={"capitalize"}
      >
        {title}
      </Text>
      <Text mb={"8px"} fontSize={"10px"} fontWeight={"400"} color={"#605D66"}>
        {description}
      </Text>
      <Text fontSize={"20px"} fontWeight={600}>
        {pricing}
      </Text>

      <Link to={`/subscriptions/${title}`}>
        <Button
          mt={"32px"}
          bg={"#3F12C4"}
          color={"#fff"}
          fontSize={"14px"}
          w={"100%"}
          borderRadius={"10px"}
          fontWeight={600}
          _hover={{ background: "#3F12C4" }}
        >
          View Plan
        </Button>
      </Link>
    </Box>
  );
};

export default SubCard;
