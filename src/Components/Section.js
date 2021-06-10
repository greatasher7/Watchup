import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  position: relative;
  animation: appearSectionTitle 2s ease-in-out;
  @keyframes appearSectionTitle {
    from{opacity: 0; top: 30px;}
    to{opacity: 1; top: 0;}
  }
`;

const Grid = styled.div`
  margin-top: 4vh;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 160px);
  justify-content: space-between;
  grid-gap: 15px;

  @media screen and (max-width: 480px){
    grid-template-columns: repeat(auto-fit, 21.5%);
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;