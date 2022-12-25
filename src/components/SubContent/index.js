import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SubContent = ({ title, children }) => {
  return (
    <Box
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      p={"17px"}
      mb={"24px"}
    >
      <Text
        fontSize={"14px"}
        fontWeight={600}
        mb={"24px"}
        textTransform={"capitalize"}
      >
        {title}{" "}
      </Text>
      {children}
    </Box>
  );
};

export default SubContent;
