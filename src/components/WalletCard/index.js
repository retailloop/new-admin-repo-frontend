import React from "react";
import { Box, Text } from "@chakra-ui/react";

const WalletCard = ({ title, text }) => {
  return (
    <Box
      p={"23px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"7px"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      w={"100%"}
    >
      <Text color={"#605D66"} fontSize={"12px"} textTransform={"capitalize"}>
        {title}
      </Text>
      <Text fontSize={"18px"} fontWeight={600} textTransform={"capitalize"}>
        {text}
      </Text>
    </Box>
  );
};

export default WalletCard;
