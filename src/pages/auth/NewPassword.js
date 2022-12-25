import React, { useState } from "react";
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
import logo from "assets/logo.png";
import bg from "assets/sik.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const NewPassword = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  let data = {
    password: "",
    confirmPassword: "",
  };

  const Schema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characteres minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const handleSubmit = (doc) => {
    console.log(doc);
    navigate("/");
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
            Set New Password
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"14px"}
            fontWeight={500}
            mb={"40px"}
            color={"#605D66"}
          >
            Please enter a new password. It must be different from the previous
            one.
          </Text>

          <Box display="flex" flexDirection="column" flexWrap={1}>
            <Formik
              initialValues={data}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={Schema}
            >
              {({ values, handleChange, errors, touched, handleBlur }) => (
                <Form>
                  <Text fontSize={"10px"} fontWeight={"600"} mb={"8px"}>
                    New Password
                  </Text>
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      placeholder="New password"
                      border="1px solid #D9D8DA"
                      name="password"
                      onBlur={handleBlur}
                      focusBorderColor={"#3F12C4"}
                      required
                    />
                    <InputRightElement>
                      <IconButton
                        background={"none"}
                        _hover={{
                          backgroud: "none",
                        }}
                        onClick={() => setShow(!show)}
                        children={
                          !show ? <AiFillEye /> : <AiFillEyeInvisible />
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && touched.password && (
                    <Text color="red" mt="5px" fontSize="12px">
                      {errors.password}
                    </Text>
                  )}

                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    mt={"16px"}
                    mb={"8px"}
                  >
                    Confirm Password
                  </Text>
                  <InputGroup>
                    <Input
                      type={hide ? "text" : "password"}
                      value={values.confirmPassword}
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm Password"
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

                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text color="red" mt="5px" fontSize="12px">
                      {errors.confirmPassword}
                    </Text>
                  )}

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
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;
