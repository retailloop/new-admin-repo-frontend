import React from "react";
import Layout from "layout";
import { Box, Container, Text } from "@chakra-ui/react";
import { Subheader } from "components";
import { Delete, Edit } from "assets/svg";
import { useParams } from "react-router-dom";
import Table from "./table";

const Subscription = () => {
  const params = useParams();

  const data = [
    {
      name: "Plexus",
      owner: "Adekule Ciroma",
      status: "active",
      date: "10 Aug 2022 - 9:45AM",
    },
  ];
  return (
    <Layout>
      <Container maxW="container.xl" pb={"100px"}>
        <Subheader
          title={params.plan}
          dangerIcon={<Delete />}
          editIcon={<Edit />}
          dangerText={"delete plan"}
          show={true}
        />

        <Box mt={"32px"} border="0.5px solid #D9D8DA" borderRadius={"10px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            borderBottom={"0.5px solid #D9D8DA"}
            p={"16px"}
            alignItems={"center"}
          >
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight={500}
                textTransform={"capitalize"}
              >
                {params.plan}
              </Text>
              <Text
                fontSize={"10px"}
                fontWeight={"400"}
                maxW={"300px"}
                color={"#605D66"}
              >
                Enjoy unlimited test credentials to test in sandbox environment
                plus 100 free API calls to make live API calls in production.
              </Text>
            </Box>

            <Text fontSize={"20px"} fontWeight={600}>
              Free
            </Text>
          </Box>

          <Box p={"16px"}></Box>
        </Box>

        <Box mt={"24px"} border="0.5px solid #D9D8DA" borderRadius={"10px"}>
          <Box borderBottom={"0.5px solid #D9D8DA"} p={"16px"}>
            <Text
              fontSize={"16px"}
              fontWeight={500}
              textTransform={"capitalize"}
            >
              Businesses
            </Text>
          </Box>

          <Box p={"16px"}>
            <Table data={data} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Subscription;
