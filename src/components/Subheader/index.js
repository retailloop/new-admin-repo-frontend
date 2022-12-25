import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Subheader = ({ title, dangerIcon, editIcon, dangerText }) => {
  const location = useLocation();

  return (
    <Box pt={"32px"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Box
          display="flex"
          flexDirection={"row"}
          gap={"6px"}
          alignItems="center"
          alignContent={"center"}
        >
          <Link to={`/${location?.pathname.split("/")[1]}`}>
            <Text
              color={"#605D66"}
              fontSize={"14px"}
              fontWeight={500}
              textTransform={"capitalize"}
            >
              {location?.pathname.split("/")[1]}
            </Text>
          </Link>
          <Text fontSize={"24px"} fontWeight={600} textTransform={"capitalize"}>
            {title}
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={"row"}
          gap={"16px"}
          alignItems="center"
        >
          <Button
            variant="outline"
            leftIcon={dangerIcon}
            fontSize={"14px"}
            fontWeight={600}
            color={"#EE1717"}
            bg={"transparent"}
            outline="1px solid #EE1717"
            border="none"
            borderRadius={"10px"}
            textTransform={"capitalize"}
            _hover={{
              background: "none",
            }}
          >
            {dangerText}
          </Button>
          <Button
            variant="solid"
            leftIcon={editIcon}
            fontSize={"14px"}
            fontWeight={600}
            color={"#fff"}
            bg={"#3F12C4"}
            borderRadius={"10px"}
            _hover={{
              background: "#3F12C4",
            }}
          >
            Edit{" "}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Subheader;
