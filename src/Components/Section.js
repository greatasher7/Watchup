import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 100px;
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
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
  grid-template-columns: repeat(auto-fit, 170px);
  justify-content: space-between;
  grid-row-gap: 40px;
  grid-column-gap: 5px;

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(auto-fit, 17%);
    margin-top: 2vh;
    grid-row-gap: 30px;
    grid-column-gap: 5px;
  }
  @media screen and (max-width: 480px){
    grid-template-columns: repeat(auto-fit, 23%);
    grid-row-gap: 20px;
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