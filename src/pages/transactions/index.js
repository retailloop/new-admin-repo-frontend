import React, { useState } from "react";
import Layout from "layout";
import { Header, Modal } from "components";
import { Container } from "@chakra-ui/react";
import Table from "./table";
import Content from "./content";

const Transactions = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      date: "10 Aug 2022 - 9:45AM",
      business: "plexus",
      owner: "Adekunle Ciroma",
      email: "adekciroma@plexus.com",
      type: "deposit",
      amount: 50000,
      status: "success",
    },
  ];
  return (
    <Layout>
      <Container maxW={"container.xl"} pb={"100px"}>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={"transaction details"}
        >
          <Content />
        </Modal>
        <Header title={"Transactions"} />
        <Table data={data} handleModal={() => setOpen(true)} />
      </Container>
    </Layout>
  );
};

export default Transactions;
