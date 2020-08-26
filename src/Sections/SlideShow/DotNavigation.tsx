import React, { useContext } from "react";
import styled from "styled-components";
import dotIcon from "../../images/dotNavigation.png";
import dotIconActive from "../../images/dotNavigationActive.png";
import { SliderItemContext, SlideItems } from "./SliderItemContext";

const Root = styled.div({
  marginTop: "10px",
  display: "flex",
  width: " 30%",
  justifyContent: "flex-start",
  alignItems: "center",
  //   postion: "absolute",
});
const Dot = styled.img({
  width: "fit-content",
  height: "fit-content",
  marginRight: "15px",
  cursor: "pointer",
});

const clickHandler = (setContext: any, key: any) => {
  const tempContex = SlideItems.map((item: any, sKey: any) => {
    if (sKey === key) {
      return {
        label: item.label,
        image: item.image,
        text: item.text,
        isActive: true,
        isLandscape: item.isLandscape,
      };
    }
    return {
      label: item.label,
      image: item.image,
      text: item.text,
      isActive: false,
      isLandscape: item.isLandscape,
    };
  });

  setContext(tempContex);
};

export default function DotNavigation() {
  const [context, setContext] = useContext(SliderItemContext);

  return (
    <Root>
      {context.map((item: any, key: any) => (
        <Dot src={item.isActive ? dotIconActive : dotIcon} onClick={() => clickHandler(setContext, key)} />
      ))}

      {/* <Dot src={dotIcon} />
      <Dot src={dotIcon} />
      <Dot src={dotIcon} />
      <Dot src={dotIcon} /> */}
    </Root>
  );
}
