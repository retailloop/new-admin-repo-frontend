import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
            <th>business id</th>
            <th>subscription</th>
            <th>created</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={`${i}+${data.name}`}>
              <td>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"8px"}
                  alignItems={"center"}
                >
                  <Box
                    w={"32px"}
                    h={"32px"}
                    display={"grid"}
                    borderRadius="100%"
                    placeItems={"center"}
                    bg={"#10AA69"}
                    color={"#fff"}
                    textTransform={"uppercase"}
                    fontSize={"14px"}
                    fontWeight={500}
                  >
                    PL
                  </Box>

                  {data.name}
                </Box>
              </td>
              <td>{data.id}</td>
              <td>{data.subscription}</td>
              <td>{data.created}</td>
              <td>
                {" "}
                <Badge type={data.status}>{data.status}</Badge>
              </td>
              <td>
                {" "}
                <Link
                  to={`/businesses/${i}`}
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
