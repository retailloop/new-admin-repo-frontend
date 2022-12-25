import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const ChartCard = ({ title }) => {
  return (
    <Box
      p={"16px"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      w={"100%"}
      maxW={"100%"}
      maxH={"408px"}
      h={"408px"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignContent={"center"}
        mb={"30px"}
      >
        <Text fontSize={"16px"} fontWeight={600} textTransform={"capitalize"}>
          {title}
        </Text>
        <Box display={"flex"} flexDirection={"row"} gap={"16px"}>
          <Select
            border={"1px solid #D9D8DA"}
            p={"8px"}
            fontWeight={400}
            fontSize={"12px"}
            borderRadius={"10px"}
            bg={"transparent"}
          >
            <option>Sales</option>
          </Select>

          <Select
            border={"1px solid #D9D8DA"}
            p={"8px"}
            fontWeight={400}
            w={"100%"}
            fontSize={"12px"}
            borderRadius={"10px"}
            bg={"transparent"}
          >
            <option>This week</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartCard;
