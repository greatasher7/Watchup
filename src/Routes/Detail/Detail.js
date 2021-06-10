import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import useDetail from "./useDetail";
import DetailIframe from "Components/DetailIframe";
import DetailCredit from "Components/DetailCredit";
import DetailReview from "Components/DetailReview";
import DetailRelated from "Components/DetailRelated";

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bgImg});
    background-position: center center;
    background-size: cover;
    filter: blur(5px);
    animation: appearDetailBg 3s ease-in-out;
    @keyframes appearDetailBg{
        from{opacity: 0}
        to{opacity: 1}
    }
`;

const ContentCover = styled.div`
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, .6);    
`;

const Section = styled.section`
    position: relative;
    width: 75%;
    margin: 5vh auto;
    padding-bottom: 5vh;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #333, #ccc, #333);
    border-image-slice: 1;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    animation: appearDetail 2s ease-in-out;
    @keyframes appearDetail{
        from{opacity: 0; top: 7vh}
        to{opacity: 1; top: 0}
    }
    &:first-child{
        margin-top: 20vh;
    }
    &:last-child{
        margin-bottom: 15vh;
    }
`;

const Cover = styled.img`
    display: block;
    width: 25%;
    min-width: 18vw;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #000;
`;

const Data = styled.div`
    width: 75%;
    margin-left: 4vw;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    margin-bottom: 4vh;
`;

const InfoContainer = styled.div`
    margin-bottom: 3vh;
    font-size: .8rem;
`;

const Info = styled.span`
    color: #ccc;
    &.block{
        display: block;
        margin-top: 1.5vh;
    }
`;

const Divider = styled.span`
    margin: 0 .7vw;
    font-weight: bold;
`;

const Description = styled.p`
    line-height: 1.5;
    opacity: .8;
    font-size: .9rem;
`;

const Detail = (props) => {

    const [loading, detailResult, castResult, reviewResult, relatedResult] = useDetail(props);
    
    return loading ? 
        <>  
            <Helmet><title>Loading...</title></Helmet>
            <Loader /> 
        </> : (
        <>
            <Helmet><title>{detailResult.title ? detailResult.title : detailResult.name} | watchup</title></Helmet>
            <Container>
                <Backdrop bgImg={`https://image.tmdb.org/t/p/original/${detailResult.backdrop_path}`}></Backdrop>
                <ContentCover>
                    <Section>
                        <Cover src={detailResult.poster_path ? `https://image.tmdb.org/t/p/w300/${detailResult.poster_path}` : require("assets/noPosterSmall.PNG").default}></Cover>
                        <Data>
                            <Title>{detailResult.title ? detailResult.title : detailResult.name}</Title>
                            <InfoContainer>
                                <Info>{detailResult.release_date ? detailResult.release_date.substring(0, 4) : detailResult.first_air_date ? detailResult.first_air_date.substring(0, 4) : "-"}</Info>
                                <Divider>·</Divider>
                                <Info>{detailResult.runtime ? `${detailResult.runtime} min` : `${detailResult.seasons.length} seasons & ${detailResult.seasons[detailResult.seasons.length-1].episode_count} episodes`}</Info>
                                <Divider>·</Divider>
                                <Info>{detailResult.production_countries.map((country, index) => index === detailResult.production_countries.length-1 ? country.name : country.name+" & ")}</Info>
                                <Info className="block">{detailResult.genres.map((genre, index) => index === detailResult.genres.length-1 ? genre.name : genre.name+" · ")}</Info>
                            </InfoContainer>
                            <Description>{detailResult.overview}</Description>
                        </Data>
                    </Section>
                    <Section>
                        <DetailIframe key={props.match.params.id + "Iframe"} title ={detailResult.title ? detailResult.title : detailResult.name} />
                    </Section>
                    <Section>
                        <DetailCredit key={props.match.params.id + "Credit"} castResult = {castResult} />
                    </Section>
                    <Section>
                        <DetailReview key={props.match.params.id + "Review"} reviewResult = {reviewResult}/>
                    </Section>
                    <Section>
                        <DetailRelated key={props.match.params.id + "Related"} relatedResult = {relatedResult} />
                    </Section>
                </ContentCover>
            </Container>
        </>
    );
}

export default Detail;