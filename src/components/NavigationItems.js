import React from "react";
import {
  NavLinkElement,
  NavigationItem,
  NavigationItemsContainer,
  NavigationHeader,
} from "../utils/styledComponents";

const NavigationItems = () => {
  return (
    <NavigationItemsContainer>
      <NavLinkElement to="/">
        <span
          className="far fa-arrow-alt-circle-left"
          style={{ color: "#fff", fontSize: "25px", cursor: "pointer" }}
        ></span>
        <NavigationHeader>Back</NavigationHeader>
      </NavLinkElement>
      <NavLinkElement to="/dishes">
        <NavigationItem>Dishes</NavigationItem>
      </NavLinkElement>
    </NavigationItemsContainer>
  );
};

export default NavigationItems;
