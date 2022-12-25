import React from "react";
import { ArrowUp, Arrowdown } from "assets/svg";
import { Box, Text } from "@chakra-ui/react";

const SummaryCard = ({ title, amount, status, selected, type }) => {
  return (
    <Box
      p={"16px"}
      border={selected ? "none" : "0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      w={"100%"}
      bg={selected ? "#3F12C4" : "none"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={selected ? "center" : "none"}
      cursor={"pointer"}
    >
      <Text
        color={selected ? "#fff" : "#605D66"}
        fontSize={"12px"}
        fontWeight={400}
        mb={"7px"}
        textTransform={"capitalize"}
      >
        {title}
      </Text>
      <Text
        fontSize={"18px"}
        color={selected ? "#fff" : "#2B292F"}
        fontWeight={600}
        mb={"16px"}
      >
        {amount}
      </Text>

      {type === "increase" ? (
        <Box display={"flex"} flexDir={"row"} gap={"9px"}>
          <ArrowUp />
          <Text color={"#10AA69"} fontSize={"10px"} fontWeight={500}>
            {status}
          </Text>
        </Box>
      ) : type === "decrease" ? (
        <Box display={"flex"} flexDir={"row"} gap={"9px"}>
          <Arrowdown />
          <Text color={"#EE1717"} fontSize={"10px"} fontWeight={500}>
            {status}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default SummaryCard;
