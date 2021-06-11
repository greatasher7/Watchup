import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`;

const Title = styled.h3`
    font-size: 1.2rem;
    margin-left: .5vw;
`;

const NoReview = styled.div`
    margin-top: 4vh;
    color: #ccc;
    font-size: .8rem;
    margin-left: 1vw;
`;

const Article = styled.article`
    display: flex;
    align-items: flex-start;
    margin-top: 3.5vh;
`;

const ProfileImg = styled.span`
    display: block;
    width: 3rem;
    height: 3rem;
    background-color: #333;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 3px solid #fff;
`;

const ContentBox = styled.div`
    width: 80%;
    margin-left: 1rem;
`;

const Name = styled.h4`
    font-size: .8rem;
    margin-bottom: 1vh;
`;

const Contents = styled.p`
    font-size: .7rem;
    line-height: 1.5;
    color: #ccc;
    background-color: rgba(0, 0, 0, .5);
    padding: 1.5vh;
    border-radius: 20px;
    &.tabletReview{display: none;}
    @media screen and (max-width: 1024px){
        &.tabletReview{display: block;}
        &.pcReview{display: none;}
        border-radius: 10px;
    }
`;

const Date = styled.span`
    display: block;
    font-size: .7rem;
    color: #999;
    margin-left: .5rem;
    margin-top: .5rem;
`;

const DetailReview = ({reviewResult}) => {

    return(
        <Container>
            <Title>Reviews</Title>
            {reviewResult.length < 1 ? 
                <NoReview>No Reviews...</NoReview> :
                reviewResult.map(review => {
                    return(
                        <Article key={review.id}>
                            <ProfileImg img={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w300/${review.author_details.avatar_path}` : ""} />
                            <ContentBox>
                                <Name>{review.author}</Name>
                                <Contents className="pcReview">{`${review.content.substring(0, 300)}...`}</Contents>
                                <Contents className="tabletReview">{`${review.content.substring(0, 100)}...`}</Contents>
                                <Date>{review.updated_at.substring(0, 10)}</Date>
                            </ContentBox>
                        </Article>
                    );
                })
            }
        </Container>
    )
}

DetailReview.propTypes = {
    reviewResult: PropTypes.arrayOf(PropTypes.shape({
        author_details: PropTypes.shape({
            avatar_path: PropTypes.string
        }),
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    }))
}

export default DetailReview;