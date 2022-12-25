import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TopCard = ({ title, name, sub, rightText, status }) => {
  return (
    <Box
      p={"16px"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      w={"400px"}
    >
      <Text textTransform={"capitalize"} fontSize={"16px"} fontWeight={600}>
        {title}
      </Text>

      <Box display={"flex"} flexDirection={"column"} gap={"20px"} mt={"26px"}>
        {/* map content */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={"row"} gap={"8px"}>
            <Box
              w={"32px"}
              h={"32px"}
              display={"grid"}
              borderRadius="100%"
              placeItems={"center"}
              bg={"#10AA69"}
              color={"#fff"}
              textTransform={"uppercase"}
              fontSize={"14px"}
              fontWeight={500}
            >
              PL
            </Box>
            <Box>
              <Text
                textTransform={"capitalize"}
                fontSize={"14px"}
                fontWeight={500}
              >
                {name}
              </Text>
              <Text color={"#605D66"} fontSize={"10px"} fontWeight={400}>
                {sub}
              </Text>
            </Box>
          </Box>

          <Text
            fontSize={"12px"}
            fontWeight={600}
            color={status ? "#10AA69" : "#605D66"}
          >
            {rightText}
          </Text>
        </Box>
        {/* map content end */}
      </Box>
    </Box>
  );
};

export default TopCard;
