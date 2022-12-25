import React from "react";
import { Box, Container, Avatar } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Notification from "assets/svg/Notification";

const Navbar = () => {
  return (
    <Box
      borderBottom="0.5px solid #D9D8DA"
      h="64px"
      display="flex"
      alignContent="center"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Box
          display="flex"
          justifyContent={"flex-end"}
          alignItems="center"
          alignContent={"ccenter"}
        >
          <Box
            display="flex"
            alignItems={"center"}
            alignContent="center"
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={"5px"}
          >
            <Box
              cursor="pointer"
              w="40px"
              h="40px"
              borderRadius="100%"
              bg="#DBD0FB"
              p="8px"
              display="flex"
              justifyContent="center"
            >
              <Notification />
            </Box>
            <Menu>
              <MenuButton as={Box} cursor="pointer">
                <Avatar size="sm" src="https://bit.ly/broken-link" ml="35px" />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem color="#EE1717">Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
