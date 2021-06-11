import React from "react";
import {Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import TVFrame from "./TVFrame";
import styled from "styled-components";


const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 15vh;
    margin-bottom: 10vh;
    @media screen and (max-width: 1024px){
        top: 13vh;
    }
    @media screen and (max-width: 480px){
        top: 15vh;
    }
`;

const TabList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    height: 6vh;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #333, #ccc, #333);
    border-image-slice: 1;
    position: relative;
    animation: appearMovieTab 3s ease-in-out;
    @keyframes appearMovieTab {
        from{opacity: 0}
        to{opacity: 1}
    }
    @media screen and (max-width: 1024px){
        width: 80vw;
    }
    @media screen and (max-width: 480px){
        width: 90vw;
    }
`;

const Tabs = styled.li`
    color: ${props => props.current ? "#fff" : "#999"};
    box-shadow: ${props => props.current ? "0 0 10px #fff" : "none"};
    border-radius: 10px;
    &:hover{
        color: #fff;
        box-shadow: 0 0 10px #fff;
    }
`;

const CLink = styled(Link)`
    display: flex;
    font-weight: lighter;
    font-size: .8rem;
    padding: 1vh 2vw;
    @media screen and (max-width: 480px){
        font-size: .6rem;
    }
`;

const Container = styled.div`
    padding: 12vh 2vw;
    @media screen and (max-width: 1024px){
        padding-top: 10vh;
    }
    @media screen and (max-width: 480px){
        padding-top: 12vh;
    }
`;

const TV = ({match, location: {pathname}}) => {

    return (
        <>
            <Helmet><title>TV Shows | watchup</title></Helmet>
            <TabContainer>
                <TabList>
                    <Tabs current={pathname === "/show"}><CLink to={`/show`}>Popular</CLink></Tabs>
                    <Tabs current={pathname === "/show/ontheair"}><CLink to={`/show/ontheair`}>On The Air</CLink></Tabs>
                    <Tabs current={pathname === "/show/airingtoday"}><CLink to={`/show/airingtoday`}>Airing Today</CLink></Tabs>
                    <Tabs current={pathname === "/show/toprated"}><CLink to={`/show/toprated`}>Top Rated</CLink></Tabs>
                </TabList>
            </TabContainer>
            <Container>
                <Route path={`${match.path}`} exact render={(props) => <TVFrame {...props} title={`Popular Shows`} />} />
                <Route path={`${match.path}/ontheair`} render={(props) => <TVFrame {...props} title={`On The Air Shows`} />} />
                <Route path={`${match.path}/airingtoday`} render={(props) => <TVFrame {...props} title={`Airing Today Shows`} />} />
                <Route path={`${match.path}/toprated`} render={(props) => <TVFrame {...props} title={`Top Rated Shows`} />} />
            </Container>
        </>
    );
};

export default TV;