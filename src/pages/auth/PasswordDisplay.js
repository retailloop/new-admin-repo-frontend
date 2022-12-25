import React from "react";
import logo from "assets/logo.svg";
import sms from "assets/sms.svg";
import { Link } from "react-router-dom";
import { Box, Text, Button, Image } from "@chakra-ui/react";

const PasswordDisplay = () => {
  return (
    <Box>
      <Image src={logo} alt={logo} mt={"40px"} ml={"26px"} />
      <Box display="grid" placeItems={"center"} mt={"150px"}>
        <Image src={sms} alt="sms" />
        <Text mt={"27px"} fontSize={"24px"} mb={"16px"} fontWeight={700}>
          Password Reset Link Sent!
        </Text>

        <Text textAlign={"center"} color={"#605D66"} fontSize={"16px"}>
          We have sent a passowrd reset link with instructions to your <br />{" "}
          email address. Please click on the link to reset your password.
        </Text>

        <Link to="/">
          <Button
            bg={"#3F12C4"}
            color={"#fff"}
            fontSize={"14px"}
            fontWeight={400}
            borderRadius={"10px"}
            width={"352px"}
            mt={"32px"}
            _hover={{ background: "#3F12C4" }}
          >
            Go Back To Sign In
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PasswordDisplay;
