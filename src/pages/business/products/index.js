import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Progressbar } from "components";

const Products = () => {
  const data = [
    {
      product: "Lipton yellow label",
      price: "550",
      in_stock: 150,
      sold: 100,
      revenue: 50000.0,
    },
    {
      product: "Lipton yellow label",
      price: "550",
      in_stock: 150,
      sold: 150,
      revenue: 50000.0,
    },
    {
      product: "Lipton yellow label",
      price: "550",
      in_stock: 150,
      sold: 50,
      revenue: 50000.0,
    },
  ];
  return (
    <Box
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      maxW="100%"
      overflowX={"auto"}
      whiteSpace={"nowrap"}
    >
      <table>
        <thead>
          <tr>
            <th>product name</th>
            <th>price </th>
            <th>in stock </th>
            <th>sold </th>
            <th>revenue </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />
                {item.product}
              </td>
              <td>{item.price}</td>
              <td>
                <Progressbar
                  percentage={Math.round((item.sold * 100) / item.in_stock)}
                  stock={item.in_stock}
                  sold={item.sold}
                />
              </td>
              <td>{item.sold}</td>
              <td style={{ color: "#10AA69" }}>{item.revenue}</td>
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
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Products;
