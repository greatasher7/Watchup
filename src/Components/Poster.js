import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const PLink = styled(Link)`

`;

const Container = styled.div`
    font-size: .8rem;
    animation: appearPoster 2s ease-in-out;
    position: relative;

    @keyframes appearPoster {
        from{opacity: 0; top: 30px}
        to{opacity: 1; top: 0}
    }
`;


const Image = styled.div`
    height: 230px;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    transition: opacity .2s ease-in-out, box-shadow .2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 15px #e6bd0a;
    }
`;

const Rating = styled.span`
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity .2s ease-in-out;
`;

const ImageContainer = styled.div`
    margin-bottom: 8px;
    position: relative;
    &:hover{
        ${Image}{
            opacity: .6;
        }
        ${Rating}{
            opacity: 1;
        }
    }
`;

const CaptionContainer = styled.div`
    padding-left: 3px;
`;

const Title = styled.span`
    font-size: 14px;
    display: block;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 12px;
    opacity: .5;
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (

    <PLink to={isMovie? `/movie-detail/${id}` : `/show-detail/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require("assets/noPosterSmall.PNG").default} />
                <Rating>
                    <span role="img" aria-label="rating">⭐️</span>
                    {" "}{rating}
                </Rating>
            </ImageContainer>
            <CaptionContainer>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </CaptionContainer>
        </Container>
    </PLink>

);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.number,
    isMovie: PropTypes.bool
}

export default Poster;