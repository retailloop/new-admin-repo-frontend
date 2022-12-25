import React from "react";
import { Badge } from "components";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import commaNumber from "comma-number";

const Orders = () => {
  const data = [
    {
      order_no: 123456,
      quantity: 2,
      amount: 1650.0,
      customer: "Jimmy Thompson",
      date: "10 Aug 2022 - 9:45AM",
      status: "pending",
    },
  ];
  return (
    <Box border={"0.5px solid #D9D8DA"} borderRadius={"10px"}>
      <table>
        <thead>
          <tr>
            <th>order number</th>
            <th>quantity</th>
            <th>amount</th>
            <th>customer name</th>
            <th>date</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={`${i + item.order_no}`}>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />
                  {item.order_no}
                </td>
                <td>{item.quantity}</td>
                <td>{`NGN ${commaNumber(item.amount)}`}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />
                  {item.customer}
                </td>
                <td>{item.date}</td>
                <td>
                  <Badge type={item.status}>{item.status}</Badge>
                </td>
                <td>
                  <Link
                    to="/"
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
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default Orders;
