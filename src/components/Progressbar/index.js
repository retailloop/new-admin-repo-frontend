import React from "react";
import { Box } from "@chakra-ui/react";

const Progressbar = ({ percentage, stock, sold }) => {
  return (
    <Box
      h={"24px"}
      borderRadius={"5px"}
      bg={"transparent"}
      w={"100%"}
      border={percentage === 100 ? "none" : "1px solid #D9D8DA"}
    >
      <Box
        h={"100%"}
        w={`${percentage}%`}
        backgroundColor={`${
          percentage <= 50
            ? "#CFEEE1"
            : percentage <= 75
            ? "#FEF4D1"
            : "#FCD1D1"
        }`}
        borderRadius={"5px"}
        textAlign={"center"}
      >
        <Box
          position={"static "}
          color={`${
            percentage <= 50
              ? "#10AA69"
              : percentage <= 75
              ? "#D1A713"
              : "#EE1717"
          }`}
          fontSize={"12px"}
          textAlign={"center"}
          fontWeight={500}
          zIndex={3}
          w={"100%"}
        >
          {percentage === 100 ? (
            "Out of Stock"
          ) : (
            <>
              {`${sold}`}/{stock}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Progressbar;
