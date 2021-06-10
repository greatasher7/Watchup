import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    color: ${props => props.color};
    font-weight: 600;
    font-size: 1.2rem;
`;

const Message = ({text, color}) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Message.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string
}

export default Message;