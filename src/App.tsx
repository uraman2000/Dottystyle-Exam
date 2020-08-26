import React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import MainBackground from "./images/mainBackground.jpg";
import Dots from "./images/dots.png";
import Home from "./Sections/Home";
import BackgroundAndChallenge from "./Sections/BackgroundAndChallenge";
import Solution from "./Sections/Solution";
import SlideShow from "./Sections/SlideShow/SlideShow";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DotNav from "./Components/DotNav";

const Background = styled.img({
  position: "absolute",
  width: "100%",
  zIndex: -2,
});

const Overlay = styled.div({
  backgroundImage: `url(${Dots})`,
  height: "200%",
  width: "100%",
  position: "absolute",
  pointerEvents: "none",
  zIndex: 0,
});

function App() {
  return (
    <>
      <NavBar />
      <DotNav />
      <Background src={MainBackground} />
      <Overlay />

      <Home id="home" />
      <BackgroundAndChallenge id="background-and-challenge" />
      <Solution id="solution" />
      <SlideShow id="slide-show" />
    </>
  );
}

export default App;
