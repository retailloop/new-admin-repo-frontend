import React from "react";
import Layout from "layout";
import { Box, Container, Text } from "@chakra-ui/react";
import { Badge, Subheader } from "components";
import Table from "./table";

const Orders = () => {
  const data = [
    {
      product: "lipton yellow label tea",
      price: 550.0,
      quantity: 3,
      amount: 1650.0,
      discount: 0,
    },
  ];
  return (
    <Layout>
      <Container maxW={"container.xl"} pb={"100px"}>
        <Subheader title={"order details"} show={false} />

        <Box border={"0.5px solid #D9D8DA"} borderRadius={"10px"} mt={"32px"}>
          <Box p={"16px"} borderBottom={"0.5px solid #D9D8DA"}>
            <Text fontSize={"16px"} fontWeight={600}>
              Customer
            </Text>
          </Box>

          <Box p={"16px"}></Box>
        </Box>

        {/* table */}
        <Box border={"0.5px solid #D9D8DA"} borderRadius={"10px"} mt={"24px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={"16px"}
            borderBottom={"0.5px solid #D9D8DA"}
          >
            <Text fontSize={"16px"} fontWeight={600}>
              Orders
            </Text>
            <Badge type={"active"}>success</Badge>
          </Box>

          <Box p={"16px"}>
            <Table data={data} />
          </Box>
        </Box>

        {/* table ending */}
      </Container>
    </Layout>
  );
};

export default Orders;
