import React, { useState } from "react";
import "./Navigation.css";

import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ icon, text, to, isExpanded, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink
      to={to.startsWith("https://") ? { pathname: to.replace("https:", "") } : to}
      target={to.startsWith("https://") ? "_blank" : null}
      className={({ isActive }) =>
        `item ${hovered || (isActive && !isExpanded) ? color : "c0"}` +
        (isActive ? " active" : "")
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack direction="row" spacing={2} className={`${hovered ? "hovered" : ""}`}>
        <span className={`text ${isExpanded ? "expanded" : ""}`}>{text}</span>
        <span className="icon">{icon}</span>
        <div className="border"></div>
      </Stack>
    </NavLink>
  );
};

export default NavigationItem;
