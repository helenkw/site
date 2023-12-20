import React, { useState } from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem";

import { Stack } from "@mui/material";
import { AccountCircle, Build, School } from "@material-ui/icons";

const navigationItems = [
  {
    id: 0,
    icon: <AccountCircle fontSize="small" className="icon" />,
    text: "About",
    color: "c1",
    to: "/",
  },
  {
    id: 1,
    icon: <School fontSize="small" className="icon" />,
    text: "Classes",
    color: "c2",
    to: "/classes",
  },
  {
    id: 9,
    icon: <Build fontSize="small" className="icon" />,
    text: "Source code",
    color: "c3",
    to: "https://github.com/helenkw/site/",
  },
];

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);

  return (
    <Stack id="navigation" onMouseEnter={expand} onMouseLeave={collapse}>
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.id}
          icon={item.icon}
          text={item.text}
          to={item.to}
          color={item.color}
          isExpanded={expanded}
        />
      ))}
    </Stack>
  );
};

export default Navigation;
