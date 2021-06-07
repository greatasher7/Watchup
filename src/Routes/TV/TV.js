import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import useGetTV from "./useGetTV";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import {TVFrame} from "Components/ContentsFrame";
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
    border-bottom: 1px solid #ccc;
    position: relative;
    animation: appearShowTab 3s ease-in-out;
    @keyframes appearShowTab {
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

const TV = ({match}) => {

    const [{topRated, popular, airingToday, onTheAir}, error, loading] = useGetTV();

    return (
        <>
            <Router>
                <TabContainer>
                    <TabList>
                        <Tabs><CLink to={`${match.url}`}>On The Air</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/airingToday`}>Airing Today</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/popular`}>Popular</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/toprated`}>Top Rated</CLink></Tabs>
                    </TabList>
                </TabContainer>
                {loading && <Loader />}
                <>
                <Helmet><title>TV Shows | watchup</title></Helmet>
                    <Container>
                        <Route path={`${match.path}`} exact ><TVFrame contents={onTheAir} title="On The Air Shows" /></Route>
                        <Route path={`${match.path}/airingToday`} ><TVFrame contents={airingToday} title="Airing Today Shows" /></Route>
                        <Route path={`${match.path}/popular`} ><TVFrame contents={popular} title="Popular Shows" /></Route>
                        <Route path={`${match.path}/toprated`} ><TVFrame contents={topRated} title="Top Rated Shows" /></Route>
                        {error && <Message title={error} />}
                        <Route path="/show-detail/:id" component={Detail}/>
                    </Container>
                </>
            </Router>
        </>
    );
};

export default TV;