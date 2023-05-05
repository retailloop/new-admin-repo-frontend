import React, { useState } from "react";
import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Image, HStack } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";

const Verification = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin = text1.concat(text2, text3, text4, text5, text6);
    navigate("/dashboard");
    console.log(pin);
  };
  return (
    <Box>
      <Image src={logo} alt={logo} mt={"40px"} ml={"26px"} />
      <Box display="grid" placeItems={"center"}>
        <Text mt={"32px"} fontSize={"32px"} mb={"32px"} fontWeight={700}>
          Enter Verification OTP
        </Text>
        <Box display={"flex"} flexDir={"row"} flexWrap={"wrap"} gap={"8px"}>
          <HStack>
            <PinInput otp border="1px solid #D9D8DA">
              <PinInputField onChange={(e) => setText1(e.target.value)} />
              <PinInputField onChange={(e) => setText2(e.target.value)} />
              <PinInputField onChange={(e) => setText3(e.target.value)} />
              <PinInputField onChange={(e) => setText4(e.target.value)} />
              <PinInputField onChange={(e) => setText5(e.target.value)} />
              <PinInputField onChange={(e) => setText6(e.target.value)} />
            </PinInput>
          </HStack>
        </Box>

        <Text
          textAlign={"center"}
          color={"#605D66"}
          fontSize={"16px"}
          mt={"24px"}
        >
          Please enter the six (6) digit code sent to your email address <br />
          <strong>adekunleciroma@plexus.com</strong>
        </Text>

        <Button
          bg={"#3F12C4"}
          color={"#fff"}
          fontSize={"14px"}
          fontWeight={400}
          borderRadius={"10px"}
          width={"352px"}
          mt={"32px"}
          onClick={handleSubmit}
          _hover={{ background: "#3F12C4" }}
        >
          Verify Email Address
        </Button>
      </Box>
    </Box>
  );
};

export default Verification;
