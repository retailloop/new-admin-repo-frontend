import React from "react";
import logo from "assets/logo.png";
import bg from "assets/sik.png";
import { Link, useNavigate } from "react-router-dom";
import { Box, Text, Input, Button, Image } from "@chakra-ui/react";
import { Formik, Form } from "formik";

const ResetPassword = () => {
  const navigate = useNavigate();
  let data = {
    email: "",
  };

  const handleSubmit = (doc) => {
    console.log(doc);
    navigate("/resetpassword/sent");
  };
  return (
    <Box h="100vh" bg="#3F12C4">
      <Image src={bg} alt="background" position="absolute" opacity="0.3" />
      <Box display="grid" placeItems={"center"} zIndex="2" position="relative">
        {/* logo */}

        <Image src={logo} alt="logo" mt={"56px"} />

        <Box
          w={"352px"}
          h={"auto"}
          bg={"#fff"}
          borderRadius={"10px"}
          padding={"24px"}
          mt={"40px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"24px"}
            fontWeight={"700"}
            mb={"8px"}
            fontFamily="Barlow"
          >
            Reset Password
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"14px"}
            fontWeight={500}
            mb={"40px"}
            color={"#605D66"}
          >
            Please enter the email address associated with your account
          </Text>

          <Box display="flex" flexDirection="column" flexWrap={1}>
            <Formik
              initialValues={data}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values, handleChange }) => (
                <Form>
                  <Text fontSize={"10px"} fontWeight={"600"}>
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    name="email"
                    border="1px solid #D9D8DA"
                    mt={"8px"}
                    focusBorderColor={"#3F12C4"}
                  />

                  <Button
                    bg={"#3F12C4"}
                    color={"#fff"}
                    fontSize={"14px"}
                    fontWeight={400}
                    borderRadius={"10px"}
                    width={"100%"}
                    mt={"24px"}
                    type="submit"
                    _hover={{ background: "#3F12C4" }}
                  >
                    Reset Password
                  </Button>

                  <Link to="/session/new">
                    <Text
                      color={"#3F12C4"}
                      fontSize={"12px"}
                      fontWeight={500}
                      textAlign={"center"}
                      mt={"16px"}
                      cursor={"pointer"}
                    >
                      Back To Sign In
                    </Text>
                  </Link>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
