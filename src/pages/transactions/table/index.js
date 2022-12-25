import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Badge } from "components";
import commaNumber from "comma-number";

const Table = ({ data, handleModal }) => {
  return (
    <Box
      maxW="100%"
      overflowX={"auto"}
      border={"0.5px solid #D9D8DA"}
      borderRadius={"10px"}
      whiteSpace={"nowrap"}
      mt={"28px"}
    >
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>business name</th>
            <th>owner</th>
            <th> email address </th>
            <th>type</th>
            <th>amount</th>
            <th> status </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr>
              <td>{data.date}</td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />

                {data.business}
              </td>
              <td>
                <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                  <Box w="32px" h="32px" borderRadius={"100%"} bg={"#D8C0FE"} />
                  {data.owner}
                </Box>
              </td>

              <td>{data.email}</td>
              <td>{data.type}</td>
              <td>{`NGN ${commaNumber(data.amount)}`}</td>
              <td>
                <Badge type={data.status}>{data.status}</Badge>
              </td>
              <td>
                <Text
                  cursor={"pointer"}
                  color={"#3F12C4"}
                  fontWeight={600}
                  fontSize={"12px"}
                  textTransform={"capitalize"}
                  onClick={handleModal}
                >
                  view
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
