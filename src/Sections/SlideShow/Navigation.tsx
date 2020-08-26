import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SliderItemContext, SlideItems } from "./SliderItemContext";

const Root = styled.div({
  width: "100%",
  height: "75px",
  color: "white",
  position: "absolute",
});

interface linkProps {
  active: boolean;
}
const Link = styled.div(({ active }: linkProps) => ({
  color: "white",
  marginLeft: "15px",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "8px",
  background: `${active ? "#1b3f4e" : ""}`,
  cursor: "pointer",
}));

const GridContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

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

export default function Navigation() {
  const [context, setContext] = useContext(SliderItemContext);

  return (
    <Root>
      <GridContainer>
        {context.map((item: any, key: any) => (
          <Link active={item.isActive} onClick={() => clickHandler(setContext, key)}>
            {item.label}
          </Link>
        ))}
      </GridContainer>
    </Root>
  );
}
