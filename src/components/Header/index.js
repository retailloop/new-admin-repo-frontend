import React from "react";
import {
  Box,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AddCircle, Sort, Export, Search } from "assets/svg";
import { Link } from "react-router-dom";

const Header = ({ title, handleChange, btnTitle, show, sub, link }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={"32px"}
    >
      <Text fontWeight={600} fontSize={"24px"} textTransform={"capitalize"}>
        {title}
      </Text>
      <Box display={"flex"} flexDirection={"row"} gap={"23px"}>
        {!sub && (
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Search />} />
            <Input
              type="text"
              placeholder="Search for company e.g. Plexus"
              border="1px solid #D9D8DA"
              borderRadius={"10px"}
              fontSize="14px"
              onChange={handleChange}
              _placeholder={{
                color: "#BFBEC2",
                fontSize: "14px",
              }}
            />
          </InputGroup>
        )}
        {!sub && (
          <Button
            leftIcon={<Sort />}
            w="138px"
            border="none"
            outline="1px solid #3F12C4"
            color="#3F12C4"
            bg="transparent"
            fontSize="14px"
            fontWeight={600}
            variant="outline"
            borderRadius={"10px"}
            _hover={{ background: "none" }}
          >
            Filter
          </Button>
        )}

        {!sub && (
          <Button
            w="148px"
            leftIcon={<Export color={show ? "#3F12C4" : "#fff"} />}
            border={show ? "none" : "none"}
            outline={show ? "1px solid #3F12C4" : "none"}
            color={show ? "#3F12C4" : "#fff"}
            bg={show ? "transparent" : "#3F12C4"}
            fontSize="14px"
            fontWeight={600}
            variant={show ? "outline" : "solid"}
            borderRadius={"10px"}
            _hover={{ background: `${show ? "none" : "#3F12C4"}` }}
          >
            Export
          </Button>
        )}

        {show && (
          <Link to={link}>
            <Button
              w="100%"
              border="none"
              color="#fff"
              bg="#3F12C4"
              leftIcon={<AddCircle />}
              variant="solid"
              fontSize="14px"
              fontWeight={600}
              borderRadius={"10px"}
              _hover={{ background: "#3F12C4" }}
            >
              {btnTitle}
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
