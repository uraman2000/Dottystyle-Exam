import React, { useState } from "react";
import styled from "styled-components";
import navPlay from "../images/navigation_play_logo.png";
import DownloadIcon from "../images/download.png";
import Scrollspy from "react-scrollspy";

const Root = styled.div({
  backgroundColor: "#333333",
  width: "100%",
  height: "50px",
  color: "white",
  position: "fixed",
  zIndex: 2,
});

const Link = styled.a({
  color: "rgba(255,255,255,.60)",
  marginLeft: "15px",
  fontSize: "14px",
  textDecoration: "none",
  "a+a&:before ": {
    marginRight: "15px",
    content: "''",
    borderLeft: "1px solid #484848",
    height: "100%",
  },
  "&:hover, &.active": {
    color: "#ffff",
  },
});

const GridContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const DownloadBoard = styled.button((props) => ({
  border: "none",
  background: "#282828",
  width: "180px",
  color: "white",
  height: "35px",
  marginLeft: "170px",
  borderRadius: "8px",
  cursor: "pointer",
  img: {
    marginRight: "10px",
  },
  a: {
    color: "white",
    textDecoration: "none",
  },
}));

const CustomScrollspy = styled(Scrollspy)({
  display: "contents",
  "&.active": {
    background: "#ffff",
  },
});

const navigationList = [
  {
    link: "#home",
    label: <img src={navPlay} alt="plaything" />,
  },
  {
    link: "#background-and-challenge",
    label: "Background & Challenge",
  },
  {
    link: "#solution",
    label: "Solution",
  },
  {
    link: "#result-and-Effectiveness",
    label: "Result & Effectiveness",
  },
  {
    link: "#slide-show",
    label: "Slide Show",
  },
];

export default function NavBar() {
  const [state, setstate] = useState(navigationList);
  return (
    <Root>
      <GridContainer>
        <CustomScrollspy
          items={["home", "background-and-challenge", "solution", "result-and-Effectiveness", "slide-show"]}
          currentClassName="active"
        >
          {state.map((item: any, key: any) => (
            <Link key={key} href={item.link}>
              {item.label}
            </Link>
          ))}
        </CustomScrollspy>
        <DownloadBoard>
          <a href="https://github.com/uraman2000/Dottystyle-Exam" target="_blank">
            <img src={DownloadIcon} alt="downloadIcon" />
            Download Board
          </a>
        </DownloadBoard>
      </GridContainer>
    </Root>
  );
}
