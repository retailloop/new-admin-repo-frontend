import React from "react";
import Layout from "layout";
import { Edit, Forbidden } from "assets/svg";
import { Container, Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Subheader } from "components";
import Overview from "./overview";
import Details from "./details";
import Products from "./products";
import Orders from "./orders";

const Business = () => {
  const tab = [
    "overview",
    "business details",
    "products",
    "orders",
    "subscription",
  ];
  return (
    <Layout>
      <Container maxW="container.xl" pb={"100px"}>
        <Subheader
          title={"Business Details"}
          editIcon={<Edit />}
          dangerText={"Block business"}
          dangerIcon={<Forbidden />}
        />

        <Box mt={"32px"}>
          <Tabs variant="unstyled" defaultIndex={3}>
            <TabList
              border="0.5px solid #D9D8DA"
              pt="20px"
              mb="24px"
              borderRadius="10px"
              pl="26px"
            >
              {tab.map((item, i) => (
                <Tab
                  pb="20px"
                  color="#605D66"
                  key={`${i}+${item}`}
                  textTransform={"capitalize"}
                  _selected={{
                    color: "#3F12C4",
                    borderBottom: "4px solid #3F12C4",
                    paddingBottom: "20px",
                  }}
                >
                  {item}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <Overview />
              </TabPanel>
              <TabPanel>
                <Details />
              </TabPanel>
              <TabPanel>
                <Products />
              </TabPanel>
              <TabPanel>
                <Orders />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  );
};

export default Business;
