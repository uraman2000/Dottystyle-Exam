import React, { useContext, useState } from "react";
import styled from "styled-components";
import background from "../../images/slideShowBackground.jpg";
import Navigation from "./Navigation";
import VideoSamp from "../../images/videoSamp.png";
import DotNavigation from "./DotNavigation";
import { SliderItemContext, SlideItems } from "./SliderItemContext";

const Root = styled.div({
  height: "100%",
  width: "100%",
  background: `url(${background})`,
  backgroundSize: "cover",
  color: "white",
});

const SlideContainter = styled.div({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
  flexDirection: "column",
});

interface containerProps {
  isActive: boolean;
}

const FlexContainer = styled.div(({ isActive }: containerProps) => ({
  display: `${isActive ? "flex" : "none"}`,
  width: "70%",
  alignItems: "center",
}));

interface VideoImageProps {
  isLandscape: boolean;
}

const VideoImage = styled.img(({ isLandscape }: VideoImageProps) => ({
  display: "block",
  margin: "auto",
  width: `${isLandscape ? "100%" : "auto"}`,
}));

const LeftColumn = styled.div({
  width: "65%",
  flexDirection: "column",
  display: "flex",
  fontSize: "14px",
  // height: "100%",
});

const TextContainter = styled.div({
  // marginRight: "320px",
  width: "20% ",
  display: "flex",
  marginLeft: "30px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "100%",
});

const ViewProject = styled.button({
  border: "none",
  background: "#178bc1",
  width: "180px",
  color: "white",
  height: "50px",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "30px",
});

interface basicProps {
  id: string;
}
export default function SlideShow({ id }: basicProps) {
  const [state, setstate] = useState(SlideItems);
  return (
    <SliderItemContext.Provider value={[state, setstate]}>
      <Root id={id}>
        <Navigation />
        <SlideContainter>
          {state.map((item: any, key: any) => (
            <FlexContainer key={key} isActive={item.isActive}>
              <LeftColumn>
                {console.log(item.isLandscape)}
                <VideoImage isLandscape={item.isLandscape} src={item.image} />
              </LeftColumn>
              <TextContainter>
                {item.text}
                <ViewProject>View Project</ViewProject>
              </TextContainter>
            </FlexContainer>
          ))}
          <DotNavigation />
        </SlideContainter>
      </Root>
    </SliderItemContext.Provider>
  );
}
