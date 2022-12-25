import React from "react";
import { Badge } from "components";
import { Box, Text } from "@chakra-ui/react";

const Details = () => {
  return (
    <Box>
      {/* user details */}
      <Box border={"1px solid #D9D8DA"} borderRadius={"10px"}>
        <Box
          display={"flex"}
          borderBottom={"1px solid #D9D8DA"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"center"}
          p={"16px"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
          >
            <Box
              display={"grid"}
              placeItems={"center"}
              borderRadius={"100%"}
              w={"48px"}
              h={"48px"}
              color={"#fff"}
              fontSize={"16px"}
              fontWeight={500}
              textTransform={"uppercase"}
              bg={"#10AA69"}
            >
              PL
            </Box>
            <Box>
              <Text fontSize={"16px"} fontWeight={500}>
                Plexus
              </Text>
              <Text color={"#605D66"} fontSize={"12px"} mt={"8px"}>
                https://plexus.com
              </Text>
            </Box>
          </Box>
          <Badge type={"active"}>active</Badge>
        </Box>
        {/* content */}
        <Box p={"16px"}></Box>
      </Box>
      {/* user details end */}

      <Box border={"1px solid #D9D8DA"} borderRadius={"10px"} mt={"24px"}>
        <Box borderBottom={"1px solid #D9D8DA"} p={"16px"}>
          <Text fontSize={"16px"} fontWeight={600}>
            Company Address
          </Text>
        </Box>
        {/* content */}
        <Box p={"16px"} display={"flex"} flexDirection={"row"} gap={"65px"}>
          <Box>
            <Text
              color={"#605D66"}
              fontSize={"12px"}
              textTransform={"capitalize"}
            >
              Store Address
            </Text>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              textTransform={"capitalize"}
            >
              12, Jaxsn, Street
            </Text>
          </Box>
          <Box>
            <Text
              color={"#605D66"}
              fontSize={"12px"}
              textTransform={"capitalize"}
            >
              Store Address
            </Text>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              textTransform={"capitalize"}
            >
              Lagos island
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
