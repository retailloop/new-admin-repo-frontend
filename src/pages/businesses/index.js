import React from "react";
import Layout from "layout";
import { Header } from "components";
import { Container, Box } from "@chakra-ui/react";
import Table from "./table";

const Businesses = () => {
  const table = [
    {
      name: "Plexus",
      id: "62d1d5bcc5fbb9001e5988f7",
      subscription: "Starter",
      status: "pending",
      created: "2 mins ago",
    },
    {
      name: "Plexus",
      id: "62d1d5bcc5fbb9001e5988f7",
      subscription: "Growth",
      status: "active",
      created: "2 mins ago",
    },
    {
      name: "Plexus",
      id: "62d1d5bcc5fbb9001e5988f7",
      subscription: "enterprise",
      status: "blocked",
      created: "2 mins ago",
    },
  ];
  return (
    <Layout>
      <Container maxW="container.xl">
        <Header title={"Businesses"} show={true} btnTitle="Add Business" />

        <Box mt={"28px"}>
          <Table data={table} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Businesses;
