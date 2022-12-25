import React from "react";
import Layout from "layout";
import { Box, Container, Text } from "@chakra-ui/react";
import { Header, ChartCard, TopCard, SummaryCard } from "components";
import Table from "./table";

const Dashboard = () => {
  const data = [
    {
      name: "revenue",
      amount: "NGN 2,000,000.00",
      type: "nil",
      selected: true,
    },
    {
      name: "sales",
      amount: "NGN 50,000.00",
      status: "10% Increase Today",
      type: "increase",
      selected: false,
    },
    {
      name: "Businesses",
      amount: "30,000",
      status: "5% Increase Today",
      type: "increase",
      selected: false,
    },
    {
      name: "orders",
      amount: "2,000",
      status: "5% Increase Today",
      type: "increase",
      selected: false,
    },
  ];

  const table = [
    {
      order_no: 123456,
      product: {
        image:
          "https://media.architecturaldigest.com/photos/5d5c449e19a33100085cd622/16:9/w_2560%2Cc_limit/02_CD_3I4%2520FRONT.jpg",
        name: "Bugatti Centodieci",
      },
      price: "46,000,000",
      quantity: 1,
      status: "pending",
    },
  ];
  return (
    <Layout>
      <Container maxW={"container.xl"} pb={"100px"}>
        <Header title={"overview"} show={false} sub={true} />

        <Box display={"flex"} flexDirection={"row"} gap={"24px"} mt={"32px"}>
          {data.map((item, i) => (
            <SummaryCard
              key={`${i}+${item.name}`}
              title={item.name}
              status={item.status}
              amount={item.amount}
              selected={item.selected}
              type={item.type}
            />
          ))}
        </Box>

        {/* chart container */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"24px"}
          mt={"32px"}
          mb={"32px"}
          w={"100%"}
        >
          <ChartCard title={"report"} />
          <TopCard
            title={"Top Businesses"}
            rightText={"₦3,000,000.00"}
            name={"plexus"}
            sub={"www.plexus.com"}
          />
        </Box>

        <Box p={"16px"} border={"0.5px solid #D9D8DA"} borderRadius={"10px"}>
          <Text fontSize={"16px"} fontWeight={600} mb={"16px"}>
            Recent Businesses
          </Text>
          {/* table container */}
          <Table data={table} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Dashboard;
