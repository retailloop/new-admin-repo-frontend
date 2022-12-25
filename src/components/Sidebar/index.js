import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { routes } from "./routes";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { blueLogo } from "assets";

const Sidebar = () => {
  const location = useLocation();
  return (
    <Box w="240px" h="100vh" borderRight="1px solid #D9D8DA">
      <Image src={blueLogo} alt="logo" pt={"40px"} ml={"54px"} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        p={"16px"}
        flexWrap={"wrap"}
        gap={"32px"}
        pt={"68px"}
      >
        {routes.map((route, i) => (
          <NavLink
            to={route.link}
            key={`${route.id}+${route.name}`}
            className={({ isActive }) =>
              isActive ? styles.nav_link_active : styles.nav_link
            }
          >
            <Box>
              {route.link === location.pathname
                ? route.iconActive
                : route.link.includes(location.pathname.split("/")[1])
                ? route.iconActive
                : route.icon}
            </Box>
            {route.name}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
