import React from "react";
import { Box } from "@chakra-ui/react";
import commaNumber from "comma-number";

const Table = ({ data }) => {
  return (
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
            <th>product name</th>
            <th>price</th>
            <th>quantity</th>
            <th>amount</th>
            <th>discount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={`${i}+${data.name}`}>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />
                {data.product}
              </td>
              <td>NGN {data.price}</td>
              <td>{data.quantity}</td>
              <td>{`NGN ${commaNumber(data.amount)}`}</td>
              <td>{data.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
