import React, { useContext } from "react";
import styled from "styled-components";
import dotIcon from "../images/dotNavigation.png";
import dotIconActive from "../images/dotNavigationActive.png";
import Scrollspy from "react-scrollspy";

const Root = styled.div({
  marginTop: "10px",
  display: "flex",
  right: "0",
  height: " 100%",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 2,
  flexDirection: "column",
});
const Dot = styled.a({
  width: "fit-content",
  height: "fit-content",
  marginRight: "30px",
  marginBottom: "15px",
  cursor: "pointer",
  "&:before ": {
    content: `url(${dotIcon})`,
  },
  "&.active": {
    "&:before ": {
      content: `url(${dotIconActive})`,
    },
  },
});

const CustomScrollspy = styled(Scrollspy)({
  display: "contents",
//   "&.active": {
//     "&:before ": {
//       content: `url(${dotIconActive})`,
//     },
//   },
});

export default function DotNav() {
  return (
    <Root>
      <CustomScrollspy
        items={["home", "background-and-challenge", "solution", "result-and-Effectiveness", "slide-show"]}
        currentClassName="active"
      >
        <Dot href="#home" />
        <Dot href="#background-and-challenge" />
        <Dot href="#solution" />
        <Dot href="#result-and-Effectiveness" />
        <Dot href="#slide-show" />
      </CustomScrollspy>
    </Root>
  );
}
