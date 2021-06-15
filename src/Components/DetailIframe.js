import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {youtubeApi} from "api"; 


const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3vw;
    justify-content: space-between;
`;


const Article = styled.article`

`;

const VideoTitle = styled.h4`
    margin-left: .5vw;
    margin-bottom: .5rem;
    padding: .5rem 0;
    font-size: 1rem;
    @media screen and (max-width: 480px){
        font-size: .7rem;
        margin-bottom: 0;
        margin-left: .7vw;
    }
`;

const Video = styled.iframe`
    width: 100%;
    height: 15vw;
    border-radius: 15px;
`;



const Iframe = ({title}) => {
    const [id, setId] = useState([])
    const [error, setError] = useState(false);

    const getYoutubeId = async () => {
        try{
            const {data: {items: trailerItem}} = await youtubeApi.searchForId(`${title} Official Trailer`);
            const {data: {items: OstItem}} = await youtubeApi.searchForId(`${title} OST`);
            const {id: {videoId: trailerId1}} = trailerItem[0];
            const {id: {videoId: trailerId2}} = trailerItem[1];
            const {id: {videoId: idOst}} = OstItem[1];
            setId([trailerId1, trailerId2, idOst]);
        } catch (e){    
            console.log(e);
            setError(e);
        } finally{
            
        }
    }
    useEffect(() => {
        getYoutubeId();
    }, [])
    return(
        <Container>
            <Article>
                <VideoTitle>Trailer 1</VideoTitle>
                <Video 
                    title="Official Trailer 1" 
                    id="player" 
                    type="text/html" 
                    src={!error ? `https://www.youtube.com/embed/${id[0]}` : "https://www.youtube.com/embed/3lfnR7OhZY8"}
                    frameborder="0" 
                />
            </Article>
            <Article>
                <VideoTitle>Trailer 2</VideoTitle>
                <Video 
                    title="Official Trailer 2" 
                    id="player" 
                    type="text/html" 
                    src={!error ? `https://www.youtube.com/embed/${id[1]}` : "https://www.youtube.com/embed/u8G-BRtegO8"}
                    frameborder="0" 
                />
            </Article>
            <Article>
                <VideoTitle>OST</VideoTitle>
                <Video 
                    title="OST" 
                    id="player" 
                    type="text/html" 
                    src={!error ? `https://www.youtube.com/embed/${id[2]}` : "https://www.youtube.com/embed/l9_-2oG4Cc0"}
                    frameborder="0" 
                />
            </Article>
        </Container>
    );
} 

Iframe.propTypes = {
    title: PropTypes.string.isRequired
}

export default Iframe;