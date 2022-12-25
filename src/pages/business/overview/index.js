import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { ChartCard, SummaryCard, TopCard, Badge } from "components";
import { Link } from "react-router-dom";

const Overview = () => {
  const data = [
    {
      name: "total sales",
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
      name: "Customers",
      amount: "3,000",
      status: "2% Decrease Today",
      type: "decrease",
      selected: false,
    },
    {
      name: "orders",
      amount: "200",
      status: "5% Increase Today",
      type: "increase",
      selected: false,
    },
  ];
  const table_data = [
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
    <Box>
      <Box display={"flex"} flexDirection={"row"} gap={"24px"}>
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
          title={"Top Customers"}
          rightText={"250 Orders"}
          name={"Stephen Urkle"}
          sub={"stephurk@gmail.com"}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"24px"}
        mt={"32px"}
        mb={"32px"}
        w={"100%"}
      >
        <TopCard
          title={"Top Products"}
          rightText={"₦265,000.00"}
          name={"Lipton Yellow Label Tea"}
          sub={"250 Sold"}
          status={true}
        />
        <Box
          p={"16px"}
          border={"0.5px solid #D9D8DA"}
          borderRadius={"10px"}
          w={"100%"}
          overflow={"auto"}
        >
          <Text fontSize={"16px"} fontWeight={600}>
            Recent Orders
          </Text>
          <Box
            maxW="100%"
            overflowX={"auto"}
            border={"0.5px solid #D9D8DA"}
            borderRadius={"10px"}
            whiteSpace={"nowrap"}
          >
            <table>
              <thead>
                <tr>
                  <th>order no</th>
                  <th>product </th>
                  <th>amount </th>
                  <th>quantity </th>
                  <th>status </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {table_data.map((item) => (
                  <tr key={item.order_no}>
                    <td>{item.order_no}</td>
                    <td>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        gap={"8px"}
                        alignItems={"center"}
                      >
                        <Image
                          src={item.product.image}
                          alt="product"
                          w={"32px"}
                          h={"32px"}
                          borderRadius={"100%"}
                          objectFit={"cover"}
                        />
                        {item.product.name}
                      </Box>
                    </td>
                    <td>{`NGN ${item.price}`}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {" "}
                      <Badge type={item.status}>{item.status}</Badge>
                    </td>
                    <td>
                      {" "}
                      <Link
                        to={`/`}
                        style={{
                          color: "#3F12C4",
                          fontSize: "12px",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        view
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
