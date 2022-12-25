import {
  Dashboard,
  Building,
  Transaction,
  Card,
  Report,
  Setting,
  Box,
} from "assets/svg";

export const routes = [
  {
    name: "dashboard",
    link: "/dashboard",
    icon: <Dashboard />,
    iconActive: <Dashboard color={"#3F12C4"} />,
  },
  {
    name: "businesses",
    link: "/businesses",
    icon: <Building />,
    iconActive: <Building color={"#3F12C4"} />,
  },
  {
    name: "transactions",
    link: "/transactions",
    icon: <Transaction />,
    iconActive: <Transaction color={"#3F12C4"} />,
  },
  {
    name: "Product usage",
    link: "/product_usage",
    icon: <Box />,
    iconActive: <Box color={"#3F12C4"} />,
  },
  {
    name: "subscriptions",
    link: "/subscriptions",
    icon: <Card />,
    iconActive: <Card color={"#3F12C4"} />,
  },
  {
    name: "report",
    link: "/report",
    icon: <Report />,
    iconActive: <Report color={"#3F12C4"} />,
  },
  {
    name: "settings",
    link: "/settings",
    icon: <Setting />,
    iconActive: <Setting color={"#3F12C4"} />,
  },
];
