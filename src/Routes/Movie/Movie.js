import React from "react";
import {Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import MovieFrame from "./MovieFrame";
import styled from "styled-components";


const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 15vh;
    margin-bottom: 10vh;
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
`;

const Container = styled.div`
    padding: 12vh 2vw;
`;

const Movie = ({match, location: {pathname}}) => {

    return (
        <>
            <Helmet><title>Movies | watchup</title></Helmet>
            <TabContainer>
                <TabList>
                    <Tabs current={pathname === "/movie"}><CLink to={`/movie`}>Now Playing</CLink></Tabs>
                    <Tabs current={pathname === "/movie/upcoming"}><CLink to={`/movie/upcoming`}>Upcoming</CLink></Tabs>
                    <Tabs current={pathname === "/movie/popular"}><CLink to={`/movie/popular`}>Popular</CLink></Tabs>
                    <Tabs current={pathname === "/movie/toprated"}><CLink to={`/movie/toprated`}>Top Rated</CLink></Tabs>
                </TabList>
            </TabContainer>
            <Container>
                <Route path={`${match.url}`} exact render={(props) => <MovieFrame {...props} title={`Now Playing Movies`} />} />
                <Route path={`${match.url}/upcoming`} render={(props) => <MovieFrame {...props} title={`Upcoming Movies`} />} />
                <Route path={`${match.url}/popular`} render={(props) => <MovieFrame {...props} title={`Popular Movies`} />} />
                <Route path={`${match.url}/toprated`} render={(props) => <MovieFrame {...props} title={`Top Rated Movies`} />} />
            </Container>
        </>
    );
};

export default Movie;