import React from "react";
import { Box } from "@chakra-ui/react";
import { Badge } from "components";

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
            <th>business name</th>
            <th>owner</th>
            <th>date</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={`${i}+${data.name}`}>
              <td>{data.name}</td>
              <td>{data.owner}</td>
              <td>{data.date}</td>
              <td>
                <Badge type={data.status}>{data.status} </Badge>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
