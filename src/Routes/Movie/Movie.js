import React from "react";
import {Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import MovieFrame from "./MovieFrame";
import styled from "styled-components";
import Detail from "Routes/Detail";


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
    color: #999;
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

    console.log(pathname);
    console.log(match.url);

    return (
        <>
            <Helmet><title>Movies | watchup</title></Helmet>
            <TabContainer>
                <TabList>
                    <Tabs current={pathname}><CLink to={`${pathname}`}>Now Playing</CLink></Tabs>
                    <Tabs current={pathname}><CLink to={`${pathname}/upcoming`}>Upcoming</CLink></Tabs>
                    <Tabs current={pathname}><CLink to={`${pathname}/popular`}>Popular</CLink></Tabs>
                    <Tabs current={pathname}><CLink to={`${pathname}/toprated`}>Top Rated</CLink></Tabs>
                </TabList>
            </TabContainer>
            <Container>
                <Route path={`${match.url}`} exact render={(props) => <MovieFrame {...props} title={`Now Playing Movies`} />} />
                {/* <Route path={`${match.url}/upcoming`} render={(props) => <MovieFrame {...props} title={`Upcoming Movies`} />} />
                <Route path={`${match.url}/popular`} render={(props) => <MovieFrame {...props} title={`Popular Movies`} />} />
                <Route path={`${match.url}/toprated`} render={(props) => <MovieFrame {...props} title={`Top Rated Movies`} />} /> */}
                <Route exact path={`${match.url}/upcoming`} render={() => <h1>Hi1</h1>} />
                <Route exact path={`${match.url}/popular`} render={() => <h1>Hi2</h1>} />
                <Route exact path={`${match.url}/toprated`} render={() => <h1>Hi3</h1>} />
            </Container>
        </>
    );
};

export default Movie;