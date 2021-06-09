import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Helmet from "react-helmet";
import TVFrame from "./TVFrame";
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

    return (
        <>
            <Helmet><title>TV Shows | watchup</title></Helmet>
            <Router>
                <TabContainer>
                    <TabList>
                        <Tabs><CLink to={`${match.url}`}>Popular</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/onTheAir`}>On The Air</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/airingToday`}>Airing Today</CLink></Tabs>
                        <Tabs><CLink to={`${match.url}/topRated`}>Top Rated</CLink></Tabs>
                    </TabList>
                </TabContainer>
                <Container>
                    <Route path={`${match.path}`} exact render={(props) => <TVFrame {...props} title={`Popular Shows`} />} />
                    <Route path={`${match.path}/onTheAir`} render={(props) => <TVFrame {...props} title={`On The Air Shows`} />} />
                    <Route path={`${match.path}/airingToday`} render={(props) => <TVFrame {...props} title={`Airing Today Shows`} />} />
                    <Route path={`${match.path}/topRated`} render={(props) => <TVFrame {...props} title={`Top Rated Shows`} />} />
                    <Route path="/show-detail/:id" component={Detail}/>
                </Container>
            </Router>
        </>
    );
};

export default TV;