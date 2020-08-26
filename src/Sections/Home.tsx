import React, { useState } from "react";
import styled from "styled-components";
import playIcon from "../images/playIcon.png";
import { Modal, ModalContext } from "../Components/Modal";

const Root = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  img: {
    cursor: "pointer",
  },
});
interface basicProps {
  id: string;
}

const Video = () => {
  return (
    <iframe
      width="100%"
      height="85%"
      src="https://www.youtube.com/embed/9a2oZFjGyls"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
export default function Home({ id }: basicProps) {
  const [state, setstate] = useState(false);

  return (
    <Root id={id}>
      <ModalContext.Provider value={[state, setstate]}>
        <Modal Component={Video} />
        <img src={playIcon} onClick={() => setstate(true)} />
      </ModalContext.Provider>
    </Root>
  );
}
