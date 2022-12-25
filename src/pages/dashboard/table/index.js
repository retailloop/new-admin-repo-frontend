import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Badge } from "components";

const Table = ({ data }) => {
  return (
    <Box
      maxW="100%"
      overflow={"auto"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      whiteSpace={"nowrap"}
    >
      <table>
        <thead>
          <tr>
            <th>order no.</th>
            <th>product</th>
            <th>amount</th>
            <th>quantity</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={`${i}+${data.order_no}`}>
              <td>{data.order_no}</td>
              <td>
                {" "}
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <Image
                    src={data.product.image}
                    alt="product"
                    w="32px"
                    h="32px"
                    objectFit="cover"
                    borderRadius={"100%"}
                  />
                  {data.product.name}
                </Box>
              </td>
              <td>{`NGN ${data.price}`}</td>
              <td> {data.quantity}</td>
              <td>
                {" "}
                <Badge type={data.status}> {data.status}</Badge>
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
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
