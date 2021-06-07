import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import useGetMovie from "./useGetMovie";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import {MovieFrame} from "Components/ContentsFrame";
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

    const [{nowPlaying, upComing, popular, topRated}, error, loading] = useGetMovie();
    return (
        <>
            <Router>
                <TabContainer>
                    <TabList>
                        <Tabs><CLink to={`${match.url}`}>Now Playing</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/upcoming`}>Upcoming</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/popular`}>Popular</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/toprated`}>Top Rated</CLink></Tabs>
                    </TabList>
                </TabContainer>
                {loading && <Loader />}
                <>
                    <Helmet><title>Movies | watchup</title></Helmet>
                    <Container>
                        <Route path={`${match.path}`} exact ><MovieFrame contents={nowPlaying} title="Now Playing Movies" /></Route>
                        <Route path={`${match.path}/upcoming`} ><MovieFrame contents={upComing} title="Upcoming Movies" /></Route>
                        <Route path={`${match.path}/popular`} ><MovieFrame contents={popular} title="Popular Movies" /></Route>
                        <Route path={`${match.path}/toprated`} ><MovieFrame contents={topRated} title="Top Rated Movies" /></Route>
                        {error && <Message title={error} />}
                        <Route path="/movie-detail/:id" component={Detail}/>
                    </Container>
                </>
            </Router>
        </>
    );

};

export default Movie;