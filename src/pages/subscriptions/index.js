import React from "react";
import Layout from "layout";
import { Header, SubCard } from "components";
import { Container, Box, Image } from "@chakra-ui/react";
import { tickCircle, closeCircle } from "assets";

const Subscriptions = () => {
  const data = [
    {
      name: "100 free API calls",
      starter: true,
      growth: true,
      enterprise: false,
    },
    {
      name: "Team members",
      starter: 1,
      growth: 3,
      enterprise: "Unlimited",
    },
    {
      name: "Pre-Paid wallet",
      starter: false,
      growth: true,
      enterprise: true,
    },

    {
      name: "Volume discount (30% - 80%)",
      starter: false,
      growth: false,
      enterprise: true,
    },
  ];
  return (
    <Layout>
      {" "}
      <Container maxW="container.xl" pb={"100px"}>
        <Header
          title={"Subscriptions"}
          show={true}
          btnTitle="Add Plan"
          sub={true}
          link={`/subscriptions/create/plan`}
        />

        <Box
          display={"flex"}
          flex={1}
          gap={"16px"}
          flexDirection={"row"}
          mt={"32px"}
        >
          <SubCard
            title={"starter"}
            description={
              "Enjoy unlimited test credentials to test in sandbox environment plus 100 free API calls to make live API calls in production."
            }
            pricing={"Freemium"}
          />

          <SubCard
            title={"growth"}
            description={
              "You are charged a flat rate for each product per API call. "
            }
            pricing={"NGN100/Per API Call"}
          />

          <SubCard
            title={"enterprise"}
            description={
              "More API calls for less amount with a volume discount of between 30 - 80 percent plus integration consulting and many more."
            }
            pricing={"NGN150/Per API Call"}
          />
        </Box>

        <Box mt={"24px"}>
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
                  <th>offers</th>
                  <th>starter</th>
                  <th>growth</th>
                  <th>enterprise</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr key={`${i}+${data.name}`}>
                    <td>{data.name}</td>
                    <td>
                      {data.starter === true ? (
                        <Image src={tickCircle} alt="tick" />
                      ) : data.starter === false ? (
                        <Image src={closeCircle} alt="close" />
                      ) : (
                        <>{data.starter}</>
                      )}
                    </td>
                    <td>
                      {data.growth === true ? (
                        <Image src={tickCircle} alt="tick" />
                      ) : data.growth === false ? (
                        <Image src={closeCircle} alt="close" />
                      ) : (
                        <>{data.growth}</>
                      )}
                    </td>
                    <td>
                      {data.enterprise === true ? (
                        <Image src={tickCircle} alt="tick" />
                      ) : data.enterprise === false ? (
                        <Image src={closeCircle} alt="close" />
                      ) : (
                        <>{data.enterprise}</>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Subscriptions;
