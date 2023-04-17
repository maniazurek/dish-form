import React from "react";
import {
  NavLinkElement,
  NavigationItem,
  NavigationItemsContainer,
  NavigationHeader,
  Button,
} from "../utils/styledComponents";

const NavigationItems = ({ openProfile }) => {
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
        <NavigationItem>Content</NavigationItem>
      </NavLinkElement>

      <Button
        onClick={openProfile}
        style={{
          borderColor: "#fff",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "145px",
        }}
      >
        <i class="fa fa-question-circle" style={{ fontSize: "30px" }}></i>
      </Button>
    </NavigationItemsContainer>
  );
};

export default NavigationItems;
