import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 3vh;
    justify-content: space-between;
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
`;

const ProfileImg = styled.img`
    display: block;
    width: 80%;
    box-shadow: 0px 0px 10px #777;
    border-radius: 20%;
`;

const Name = styled.h4`
    text-align: center;
    width: 100%;
    line-height: 1.2;
    font-size: .7rem;
    margin-top: .9vh;
`;

const Character = styled.span`
    margin-top: .4vh;
    color: #aaa;
    font-size: .7rem;
    line-height: 1.1;
    text-align: center;
    display: block;
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
                        <Article>
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

export default DetailCredit;