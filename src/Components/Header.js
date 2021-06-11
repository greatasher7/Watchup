import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTv, faVideo, faSearch } from "@fortawesome/free-solid-svg-icons";

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


    @media screen and (max-width: 1024px){
        align-items: center;
        justify-content: flex-end;
        padding-right: 1rem;
    }

    @media screen and (max-width: 480px){
        justify-content: center;
        padding-right: 0;
    }
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

    @media screen and (max-width: 480px){
        display: none;
    }
`;

const List = styled.ul`
    height: 100%;
    display: flex;
    list-style: none;

    @media screen and (max-width: 480px){
        width: 70%;
    }
`;

const Item = styled.li`
    width: 7rem;
    height: 100%;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#e6bd0a" : "transparent"};
    transition: border-bottom .5s ease-in-out, color .5s ease-in-out;
    box-sizing: border-box;
    color: ${props => props.current ? "#e6bd0a" : ""};
    .mobileIcon{
        display: none;
    }
    strong{
        display: inline-block;
    }

    @media screen and (max-width: 1024px){
        width: 6rem;
    }

    @media screen and (max-width: 480px){
        font-size: 1.3rem;
        .mobileIcon{
            display: block;
        }
        strong{
            display: none;
        }
    }
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

const Nav = ({location: {pathname}}) => {
    return(
        <Header>
            <Logo to="/" />
            <List>
                <Item current={pathname === "/"}><SLink to="/"><strong>Home</strong><FontAwesomeIcon icon={faHome} className="mobileIcon" /></SLink></Item>
                <Item current={pathname.includes("/movie")}><SLink to="/movie"><strong>Movies</strong><FontAwesomeIcon icon={faVideo} className="mobileIcon" /></SLink></Item>
                <Item current={pathname.includes("/show")}><SLink to="/show"><strong>TV Show</strong><FontAwesomeIcon icon={faTv} className="mobileIcon" /></SLink></Item>
                <Item current={pathname.includes("/search")}><SLink to="/search"><strong>Search</strong><FontAwesomeIcon icon={faSearch} className="mobileIcon" /></SLink></Item>
            </List>
        </Header>
    );
}


export default withRouter(Nav);