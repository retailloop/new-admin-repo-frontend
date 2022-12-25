import React, { useState } from "react";
import Layout from "layout";
import {
  Container,
  Box,
  Text,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Modal, Subheader } from "components";
import { Formik, Form } from "formik";
import { AddCircle } from "assets/svg";
import Content from "./content";

const Plan = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={"Add Plan Offers"}
      >
        <Content />
      </Modal>
      <Container maxW={"container.xl"} pb={"100px"}>
        <Subheader title={"add plan"} show={false} hide={false} />

        <Formik>
          {({ values, handleChange }) => (
            <Form>
              {/* plan details */}
              <Box
                border={"0.5px solid #D9D8DA"}
                borderRadius={"10px"}
                maxW={"584px"}
                mt={"32px"}
              >
                <Box borderBottom={"0.5px solid #D9D8DA"} p={"16px"}>
                  <Text fontSize={"16px"} fontWeight={600}>
                    {" "}
                    Plan
                  </Text>
                </Box>
                <Box p={"16px"}>
                  <Text fontSize={"10px"} fontWeight={600} mb={"8px"}>
                    Plan name
                  </Text>
                  <Input
                    type={"text"}
                    placeholder={"Plan Name"}
                    onChange={handleChange}
                    mb={"16px"}
                    variant={"outline"}
                    borderRadius={"10px"}
                  />

                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"16px"}
                    alignItems={"center"}
                  >
                    <Box w={"100%"}>
                      <Text fontSize={"10px"} fontWeight={600} mb={"8px"}>
                        Pricing Type
                      </Text>
                      <Select
                        onChange={handleChange}
                        variant={"outline"}
                        borderRadius={"10px"}
                      >
                        <option>Free</option>
                      </Select>
                    </Box>

                    <Box w={"100%"}>
                      <Text fontSize={"10px"} fontWeight={600} mb={"8px"}>
                        Price
                      </Text>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        border={"1px solid #D9D8DA"}
                        borderRadius={"10px"}
                      >
                        <Select
                          disabled
                          _disabled={{ background: "#D9D8DA" }}
                          border={"none"}
                          outline={"none"}
                          maxW={"80px"}
                          fontSize={"14px"}
                          borderRadius={"0px"}
                          borderLeftRadius={"10px"}
                        >
                          <option>NGN</option>
                        </Select>
                        <Input
                          type={"text"}
                          disabled
                          _disabled={{ background: "#D9D8DA" }}
                          placeholder={"0.00"}
                          onChange={handleChange}
                          variant={"outline"}
                          borderRadius={"0px"}
                          border={"none"}
                          outline={"none"}
                          borderRightRadius={"10px"}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Text
                    fontSize={"10px"}
                    fontWeight={600}
                    mb={"8px"}
                    mt={"16px"}
                  >
                    Plan Description
                  </Text>

                  <Textarea
                    borderRadius={"10px"}
                    placeholder={"Plan Description"}
                  />
                </Box>
              </Box>
              {/* plan details end */}

              {/* plan offers end */}
              <Box
                border={"0.5px solid #D9D8DA"}
                borderRadius={"10px"}
                maxW={"584px"}
                mt={"24px"}
                // maxH={"216px"}
              >
                <Box borderBottom={"0.5px solid #D9D8DA"} p={"16px"}>
                  <Text fontSize={"16px"} fontWeight={600}>
                    {" "}
                    Plan Offers
                  </Text>
                </Box>
                <Box p={"16px"}>
                  <Text
                    textAlign={"center"}
                    mt={"55px"}
                    mb={"24px"}
                    color={"#605D66"}
                    fontSize={"12px"}
                  >
                    Add plan offers for this plan
                  </Text>
                  <Box display={"grid"} placeItems={"center"} mb={"49px"}>
                    <Box
                      display={"flex"}
                      flexDir={"row"}
                      gap={"5px"}
                      alignItems={"center"}
                      onClick={() => setOpen(true)}
                      cursor={"pointer"}
                    >
                      <AddCircle color={"#3F12C4"} />
                      <Text
                        color={"#3F12C4"}
                        fontSize={"12px"}
                        fontWeight={600}
                      >
                        Add Offers
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* plan offers end */}
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default Plan;
