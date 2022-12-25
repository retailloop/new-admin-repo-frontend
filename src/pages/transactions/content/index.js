import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Badge } from "components";

const Content = () => {
  return (
    <Box>
      <Text
        color={"#605D66"}
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={500}
      >
        {" "}
        View transaction details
      </Text>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"141px"}
        justifyContent={"space-between"}
        mt={"20px"}
        flex={1}
        flexWrap={"wrap"}
      >
        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            Date
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            10 Aug 2022 - 9:45AM
          </Text>
        </Box>

        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            Type
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            Deposit
          </Text>
        </Box>
      </Box>

      {/* business section */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"141px"}
        justifyContent={"space-between"}
        mt={"20px"}
        flex={1}
        flexWrap={"wrap"}
      >
        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            business name
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            plexus
          </Text>
        </Box>

        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            owner
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            adekunle ciroma
          </Text>
        </Box>
      </Box>
      {/* business section end */}

      {/* email section */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"141px"}
        justifyContent={"space-between"}
        mt={"20px"}
        flex={1}
        flexWrap={"wrap"}
      >
        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            email address
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"left"}
            textTransform={"capitalize"}
          >
            adekciroma@plexus.com
          </Text>
        </Box>

        <Box>
          <Text
            color={"#605D66"}
            fontSize={"12px"}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            amount
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            textAlign={"right"}
            textTransform={"capitalize"}
          >
            ₦50,000.00
          </Text>
        </Box>
      </Box>

      {/* email section end */}

      <Box mt={"20px"}>
        <Text
          color={"#605D66"}
          fontSize={"12px"}
          textAlign={"left"}
          textTransform={"capitalize"}
          mb={"4px"}
        >
          status
        </Text>
        <Text
          fontSize={"14px"}
          fontWeight={500}
          textAlign={"right"}
          textTransform={"capitalize"}
        >
          <Badge type={"success"}>success</Badge>
        </Text>
      </Box>
    </Box>
  );
};

export default Content;
