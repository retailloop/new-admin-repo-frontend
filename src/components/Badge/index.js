import React from "react";
import { Box } from "@chakra-ui/react";

const Badge = ({ type }) => {
  return (
    <div>
      {type === "pending" ? (
        <Box
          bg={"#FEF4D1"}
          borderRadius={"5px"}
          textAlign={"center"}
          p={"6px"}
          fontSize={"12px"}
          color={"#D1A713"}
          fontWeight={500}
          textTransform={"capitalize"}
        >
          {type}
        </Box>
      ) : type === "active" || type === "success" ? (
        <Box
          bg={"#CFEEE1"}
          borderRadius={"5px"}
          textAlign={"center"}
          p={"6px"}
          fontSize={"12px"}
          fontWeight={500}
          color={"#10AA69"}
          textTransform={"capitalize"}
        >
          {" "}
          {type}
        </Box>
      ) : (
        <Box
          bg={"#FCD1D1"}
          borderRadius={"5px"}
          textAlign={"center"}
          p={"6px"}
          fontSize={"12px"}
          fontWeight={500}
          color={"#EE1717"}
          textTransform={"capitalize"}
        >
          {" "}
          {type}
        </Box>
      )}
    </div>
  );
};

export default Badge;
