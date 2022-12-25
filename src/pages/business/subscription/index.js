import React from "react";
import { SubContent, WalletCard, Badge } from "components";
import { Box } from "@chakra-ui/react";
import commaNumber from "comma-number";

const Subscription = () => {
  const plan = [
    {
      plan: "starter plan",
      status: "active",
      date: "10 Aug 2022 - 9:45AM",
    },
  ];

  const details = [
    {
      owner: "Adekunle Ciroma",
      phone: "+2348023456789",
      email: "adekciroma@plexus.com",
      address: "Lagos, Nigeria",
    },
  ];

  const history = [
    {
      date: "10 Aug 2022 - 9:45AM",
      amount: 50000.0,
      status: "success",
      type: "deposit",
    },
  ];
  return (
    <Box>
      {/* wallet */}
      <SubContent title={"wallet"}>
        <Box display={"flex"} flexDirection={"row"} gap={"24px"} w={"100%"}>
          <WalletCard title={"current plan"} text={"starter"} />
          <WalletCard title={"wallet balance"} text={"NGN 0.00"} />
        </Box>
      </SubContent>
      {/* wallet ending */}

      {/* subscription plan */}
      <SubContent title={"subscription plan"}>
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
                <th>current plan</th>
                <th>status</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((data, i) => (
                <tr key={`${i}+${data.plan}`}>
                  <td>{data.plan}</td>
                  <td>
                    <Badge type={data.status}>{data.status}</Badge>
                  </td>
                  <td>{data.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </SubContent>
      {/* subscription plan ending*/}

      {/* billing details */}
      <SubContent title={"billing details"}>
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
                <th>owner name</th>
                <th>phone number</th>
                <th>email address</th>
                <th>billing address</th>
              </tr>
            </thead>
            <tbody>
              {details.map((data, i) => (
                <tr key={`${i}+${data.owner}`}>
                  <td>{data.owner}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </SubContent>
      {/* billing details ending*/}

      {/* billing history */}

      <SubContent title={"billing history"}>
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
                <th>date</th>
                <th>amount</th>
                <th>status</th>
                <th>type</th>
              </tr>
            </thead>
            <tbody>
              {history.map((data, i) => (
                <tr key={`${i}+${data.amount}`}>
                  <td>{data.date}</td>
                  <td>{`NGN ${commaNumber(data.amount)}`}</td>
                  <td>
                    <Badge type={data.status}>{data.status}</Badge>
                  </td>
                  <td>{data.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </SubContent>
      {/* billing history ending */}
    </Box>
  );
};

export default Subscription;
