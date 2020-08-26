import React from "react";
import styled from "styled-components";
import background from "../images/solutionBackground.jpg";
import stepper from "../images/static_steper.png";

const Root = styled.div({
  height: "100%",
  width: "100%",
  background: `url(${background})`,
  backgroundSize: "cover",
  color: "white",
});

const Title = styled.div({
  fontSize: "50px",
  textAlign: "center",
  position: "absolute",
  width: "100%",
  marginTop: "5vh",
});
const FlexContainer = styled.div({
  display: "flex",
  alignItems: "center",
  //   justifyContent: "center",
  height: "100%",
  width: "100%",
  FlexItem: {
    width: "50%",
  },
});
const FlexItem = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  FontSize: "14px",
  "&.leftColumn": {
    marginLeft: "300px",
    marginRight: "25px",
  },
  "&.rightColumn": {
    marginLeft: "25px",
    marginRight: "300px",
  },
  div: {
    marginBottom: "10px",
  },
});

const LargerText = styled.div({
  fontSize: "25px",
});

interface basicProps {
  id: string;
}
export default function Solution({ id }: basicProps) {
  return (
    <Root id={id}>
      <Title>Solution</Title>
      <FlexContainer>
        <FlexItem className="leftColumn">
          <div>
            We knew movies rated high on the list of our target’s interests and, with incredible beaches,
            seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie.
          </div>
          <div>So we invited Australians to write it:</div>
          <LargerText>The Whitsundays. A movie that’s waiting to be written.</LargerText>
          <div>
            We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days we posted a
            daily storyboard image on Facebook and Instagram, inviting the public to write scenes for a chance to
            win a $10,000 luxury holiday.
          </div>
        </FlexItem>
        <FlexItem className="rightColumn">
          <div>he campaign launched with a trailer, radio and online advertising.</div>
          <div>
            We reacted to the storyline as it developed, selecting and treating images according to the previous
            winning scene.
          </div>
          <div>Each scene written and shared became a compelling “ad” for the Whitsundays.</div>
          <div>
            Together, a Hollywood screenwriter and the Australian public had created the world’s first
            crowd-sourced movie storyboard and a story universe with millions of possible permutations.
          </div>
        </FlexItem>
      </FlexContainer>
    </Root>
  );
}
