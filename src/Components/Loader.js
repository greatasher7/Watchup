import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, .8);
`;

const LoaderComponent = () => (
    <Container>
      <Loader 
        type = "Oval"
        color = "#e6bd0a"
      />
  </Container>
);

export default LoaderComponent;