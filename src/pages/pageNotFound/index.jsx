import React from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box display="grid" placeItems="center" h="100vh">
      <Box>
        <Text textAlign="center" fontSize="56px" fontWeight="700">
          404
        </Text>
        <Text textAlign="center" fontSize="16px" fontWeight="500">
          page not found
        </Text>
        <Center>
          <Button
            bg="#3F12C4"
            borderRadius="10px"
            color="#fff"
            mt="24px"
            _hover={{
              background: "#3F12C4",
            }}
          >
            <Link to="/dashboard">Home</Link>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default PageNotFound;
