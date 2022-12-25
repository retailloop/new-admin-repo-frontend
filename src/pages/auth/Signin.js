import React, { useState } from "react";
import logo from "assets/logo.png";
import bg from "assets/sik.png";
import {
  Box,
  Text,
  Input,
  Button,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  let data = {
    email: "",
    password: "",
  };

  const handleSubmit = (doc) => {
    console.log(doc);
    navigate("/verification");
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
            Welcome!
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"14px"}
            fontWeight={500}
            mb={"40px"}
            color={"#605D66"}
          >
            Please sign in to continue.
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
                    required
                  />

                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    mt={"16px"}
                    mb={"8px"}
                  >
                    Password
                  </Text>
                  <InputGroup>
                    <Input
                      type={hide ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Password"
                      name="password"
                      border="1px solid #D9D8DA"
                      focusBorderColor={"#3F12C4"}
                      required
                    />
                    <InputRightElement>
                      <IconButton
                        background={"none"}
                        _hover={{
                          backgroud: "none",
                        }}
                        onClick={() => setHide(!hide)}
                        children={
                          !hide ? <AiFillEye /> : <AiFillEyeInvisible />
                        }
                      />
                    </InputRightElement>
                  </InputGroup>

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
                    Sign In
                  </Button>
                  <Link to="/resetpassword">
                    <Text
                      color={"#605D66"}
                      fontSize={"12px"}
                      fontWeight={500}
                      textAlign={"center"}
                      mt={"16px"}
                      cursor={"pointer"}
                    >
                      Forgot Password?
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

export default Signin;
