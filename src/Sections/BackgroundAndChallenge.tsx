import React from "react";
import styled from "styled-components";
import Logo from "../images/whitsLogo.png";

const Root = styled.div({
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",
  zIndex: 1,
  position: "relative",
  div: {
    width: "50%",
  },
});

const WitsLogo = styled.img({
  display: "block",
  margin: "auto",

  width: "auto",
});

const RightColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  //   marginLeft: "140px",
});

const Title = styled.span({
  fontSize: "50px",
  width: "285px",
  color: "white",
  marginBottom: "10px",
});

const Desc = styled.span({
  fontSize: "14px",
  color: "white",
  width: "455px",
  marginBottom: "10px",
});

interface basicProps {
  id: string;
}
export default function BackgroundAndChallenge({ id }: basicProps) {
  return (
    <>
      <Root id={id}>
        <div>
          <WitsLogo src={Logo} />
        </div>

        <RightColumn>
          <Title>Background & Audience</Title>
          <Desc>
            Tourism & Events Queensland wanted to increase consideration of The Whitsundays amongst ‘social fun
            seekers’; digitally savvy consumers that socialise substantially online.
          </Desc>
          <Title>Problem</Title>
          <Desc>The Whitsundays was losing its cachet as an aspirational holiday location.</Desc>
          <Title>Objective</Title>
          <Desc>
            Shift perceptions and re-build the Whitsundays’ social currency as a world-class destination.{" "}
          </Desc>
        </RightColumn>
      </Root>
    </>
  );
}
