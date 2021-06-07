import React, {useState, useEffect} from "react";
import styled from "styled-components";
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
    margin-bottom: 1vh;
    font-size: .9rem;
`;

const Video = styled.iframe`
    width: 100%;
    height: 15vw;
    border-radius: 15px;
`;



const Iframe = ({title}) => {
    const [id, setId] = useState([])

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
        } finally{
            
        }
    }
    useEffect(() => {
        getYoutubeId();
    }, [])
    return(
        <Container>
            <Article>
                <VideoTitle>Official Trailer 1</VideoTitle>
                <Video 
                    title="sample" 
                    id="player" 
                    type="text/html" 
                    src={`http://www.youtube.com/embed/${id[0]}`}
                    frameborder="0" 
                    />
            </Article>
            <Article>
                <VideoTitle>Official Trailer 2</VideoTitle>
                <Video 
                    title="sample" 
                    id="player" 
                    type="text/html" 
                    src={`http://www.youtube.com/embed/${id[1]}`}
                    frameborder="0" 
                    />
            </Article>
            <Article>
                <VideoTitle>OST</VideoTitle>
                <Video 
                    title="sample" 
                    id="player" 
                    type="text/html" 
                    src={`http://www.youtube.com/embed/${id[2]}`}
                    frameborder="0" 
                    />
            </Article>
        </Container>
    );
} 

export default Iframe;