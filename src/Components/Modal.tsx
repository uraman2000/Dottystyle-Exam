import React, { createContext, useContext } from "react";
import styled from "styled-components";

const Root = styled.div({
  backgroundColor: "rgba(0,0,0,0.9)",
  zIndex: 500,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  transition: "all 0.3s ease-out",
});

const Content = styled.div({
  backgroundColor: "white",
  width: "80%",
  maxWidth: "1000px",
  height: "80%",
  margin: "auto",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "20px",
});
const Close = styled.div({
  color: "#aaaaaa",
  float: "right",
  fontSize: "25px",
  fontWeight: "bold",
  marginBottom: "10px",
  cursor: "pointer",
});

interface props {
  Component: any;
}

export const ModalContext = createContext<null | any>(null);
export function Modal({ Component }: props) {
  const [context, setContext] = useContext(ModalContext);
  return (
    <Root style={{ display: `${context ? "flex" : "none"}` }}>
      <Content>
        {console.log(context)}
        <Close onClick={() => setContext(!context)}>&times;</Close>
        <Component />
      </Content>
    </Root>
  );
}
