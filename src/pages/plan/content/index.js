import React from "react";
import {
  Box,
  Input,
  Select,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search } from "assets/svg";

const Content = () => {
  return (
    <Box pb={"50px"}>
      <Text
        fontSize={"14px"}
        fontWeight={500}
        color={"#605D66"}
        textAlign={"center"}
        mb={"24px"}
      >
        Select offers for this plan
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Search />} />
        <Input
          type="text"
          placeholder="Search for company e.g. Plexus"
          border="1px solid #D9D8DA"
          borderRadius={"10px"}
          mb={"16px"}
          fontSize="14px"
          _placeholder={{
            color: "#BFBEC2",
            fontSize: "14px",
          }}
        />
      </InputGroup>

      <Text fontSize={"10px"} fontWeight={600} mb={"8px"}>
        Team Accounts
      </Text>
      <Box
        display={"flex"}
        alignItems={"center"}
        border={"1px solid #D9D8DA"}
        borderRadius={"10px"}
      >
        <Select
          border={"none"}
          outline={"none"}
          maxW={"120px"}
          fontSize={"14px"}
          borderRadius={"0px"}
          borderRight={"1px solid #D9D8DA"}
          borderLeftRadius={"10px"}
        >
          <option>Unlimited</option>
        </Select>
        <Input
          disabled
          _disabled={{ background: "#D9D8DA" }}
          type={"text"}
          placeholder={"Unlimited"}
          variant={"outline"}
          borderRadius={"0px"}
          border={"none"}
          outline={"none"}
          borderRightRadius={"10px"}
        />
      </Box>
    </Box>
  );
};

export default Content;
