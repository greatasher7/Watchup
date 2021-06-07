import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: center;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: rgba(10, 10, 10, .7);
    backdrop-filter: blur(10px);
    z-index: 1000;
`;

const Logo = styled(Link)`
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${require("assets/logo.png").default});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
`;

const List = styled.ul`
    height: 100%;
    display: flex;
    list-style: none;
`;

const Item = styled.li`
    width: 7rem;
    height: 100%;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#e6bd0a" : "transparent"};
    transition: border-bottom .5s ease-in-out, color .5s ease-in-out;
    box-sizing: border-box;
    font-size: .9rem;
    color: ${props => props.current ? "#e6bd0a" : ""};
`;

const SLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity: .6;
    }
`;

const Nav = ({location: {pathname}}) => (
    <Header>
        <Logo to="/" />
        <List>
            <Item current={pathname === "/"}><SLink to="/">Home</SLink></Item>
            <Item current={pathname.includes("/movie")}><SLink to="/movie">Movies</SLink></Item>
            <Item current={pathname.includes("/tv")}><SLink to="/tv">TV Show</SLink></Item>
            <Item current={pathname.includes("/search")}><SLink to="/search">Search</SLink></Item>
        </List>
    </Header>
);


export default withRouter(Nav);