import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {youtubeApi} from "api"; 
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 75vh;
    @media screen and (max-width: 480px){
        height: 60vh;
    }  
`;

const ContainerBg = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    opacity: .2;
    z-index: -1;
    overflow: hidden;
`;

const Video = styled.iframe`
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
`;

const ContainerInfo = styled.div`
    width: calc(100% - 5vw);
    height: 100%;
    margin: 0 2.5vw;
    padding-top: 19vh;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #333, #ccc, #333);
    border-image-slice: 1;
    position: relative;
    animation: appearInfo 2s;
    @keyframes appearInfo {
        from{opacity: 0; left: -3rem;}
        to{opacity: 1; left: 0;}
    }
    @media screen and (max-width: 1024px){
        padding-top: 13vh;
    }
    @media screen and (max-width: 480px){
        padding: 0 4vw;
        padding-top: 15vh;
    }
`;

const TagLine = styled.h1`
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 500;
    color: #aaa;
    margin-bottom: 5vh;
    margin-left: -.5vw;
    @media screen and (max-width: 480px){
        line-height: 1.3;
        margin-bottom: 3vh;
    }
    
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2.5vh;
    @media screen and (max-width: 480px){
        line-height: 1.3;
    }
`;

const InfoList = styled.ul`
    
`;

const Infos = styled.li`
    margin-bottom: 1.2vh;
    font-size: .7rem;
`;

const Description = styled.p`
    width: 70%;
    max-width: 50vw;
    line-height: 1.5;
    font-weight: lighter;
    font-size: .9rem;
    margin-top: 2vh;
    @media screen and (max-width: 480px){
        display: none;
    }
`;

const DetailLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 4.5vh;
    background: linear-gradient(156deg, rgba(245,239,88,1) 0%, rgba(60,137,228,1) 100%);
    border-radius: 0 .8rem;
    font-size: .9rem;
    margin-top: 4vh; 
    transition: opacity .5s;
    &:hover{
        opacity: .7;
    }
    @media screen and (max-width: 1024px){
        width: 25vw;
    }
    @media screen and (max-width: 480px){
        width: 30vw;
    }
`;


const HomeDetail = ({movie}) => {

    const [id, setId] = useState()
    const [error, setError] = useState(false);

    const getYoutubeId = async () => {
        try{
            const {data: {items: trailerItem}} = await youtubeApi.searchForId(`${movie.title} Official Trailer`);
            const {id: {videoId: trailerId}} = trailerItem[0];
            setId(trailerId);
        } catch (e){
            setError(e);
            console.log(e);
        } finally{
            
        }
    }
    useEffect(() => {
        getYoutubeId();
    }, [])
    
    return (
        <Container>
            <ContainerBg>
                <Video
                    title="sample" 
                    id="player" 
                    type="text/html"
                    src={error ? "https://www.youtube.com/embed/66Ne5dVDfLM?autoplay=1&mute=1&loop=1&start=1" : `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`}
                />
            </ContainerBg>
            <ContainerInfo>
                <TagLine>{movie.tagline ? `"${movie.tagline}"` : `"Movie is always right"` }</TagLine>
                <Title>{movie.title}</Title>
                <InfoList>
                    <Infos>{movie.genres.map((genre, index) => index === movie.genres.length -1 ? genre.name : genre.name + " · ")}</Infos>
                    <Infos>{movie.release_date.slice(0, 4)} · {movie.runtime} min</Infos>
                    <Infos>⭐️ {movie.vote_average}</Infos>
                    <Infos><Description>{movie.overview}</Description></Infos>
                </InfoList>
                <DetailLink to={`/movie-detail/${movie.id}`}>Movie Detail</DetailLink>
            </ContainerInfo>
        </Container>
    )
};

HomeDetail.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        tagline: PropTypes.string,
        title: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })).isRequired,
        release_date: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
    })
}

export default HomeDetail;