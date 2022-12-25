import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar, Sidebar } from "components";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexWrap={"wrap"} flexDirection={"row"}>
      <Box position="relative">
        <Sidebar />
      </Box>

      <Box flex={1} mx="auto" w="100%">
        <Navbar />
        <Box h="100vh" overflowY="scroll">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
