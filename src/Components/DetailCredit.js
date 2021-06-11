import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 3vh;
    justify-content: space-between;
    @media screen and (max-width: 480px){
        grid-template-columns: repeat(5, 1fr);
    }
`;

const Title = styled.h3`
	grid-column: 1 / 8;
    font-size: 1.2rem;
    margin-left: .5vw;
`;

const Article = styled.div`
    font-size: .6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 480px){
        display: ${props => Number(props.index.replace("cast", ""))>4 ? "none" : "block"};
    }
`;

const ProfileImg = styled.img`
    display: block;
    width: 80%;
    box-shadow: 0px 0px 10px #777;
    border-radius: 20%;
    margin: 0 auto;
    @media screen and (max-width: 1024px){
        height: 6rem;
    }
    @media screen and (max-width: 480px){
        height: 6rem;
    }
`;

const Name = styled.h4`
    text-align: center;
    width: 100%;
    line-height: 1.2;
    font-size: .7rem;
    margin-top: .9vh;
    @media screen and (max-width: 1024px){
        font-size: .6rem;
    }
`;

const Character = styled.span`
    margin-top: .4vh;
    color: #aaa;
    font-size: .7rem;
    line-height: 1.1;
    text-align: center;
    display: block;
    @media screen and (max-width: 1024px){
        font-size: .6rem;
    }
`;

const DetailCredit = ({castResult}) => {

    return(
        <> 
            <Container>
                <Title>Casts</Title>
                {castResult.map((cast, index) => {
                    if(index>13){
                        return false; 
                    }
                    return(
                        <Article key={cast.id} index ={`cast${index}`}>
                            <ProfileImg src={cast.profile_path ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}` : require("assets/noCastSmall.PNG").default}/>
                            <Name>{cast.name}</Name>
                            <Character>{cast.character}</Character>
                        </Article>
                    )
                })}
            </Container>
        </>
    )
}

DetailCredit.propTypes = {
    castResult: PropTypes.arrayOf(PropTypes.shape({
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired
    }))
}

export default DetailCredit;