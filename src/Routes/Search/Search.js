import React from "react";
import Helmet from "react-helmet";
import useSearch from "./useSearch";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
    padding: 100px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    font-size: 1.5rem;
`;

const Search = () => {

    const [{movieResult, TVResult, loading, error}, updateTerm, handleSubmit] = useSearch();

    return (
        <>
            {loading && <Loader />}
            <Helmet><title>Search | watchup</title></Helmet>
            <Container>
                <Form onSubmit={handleSubmit} onChange={updateTerm}>
                    <Input placeholder="Search Videos..." />
                </Form>
                {movieResult && movieResult.length > 0 && (
                    <Section title="Movie Results">
                        {movieResult.map(movie => (
                            <Poster 
                                key={movie.id} 
                                id={movie.id} 
                                imageUrl={movie.poster_path} 
                                title={movie.title} 
                                rating={movie.vote_average} 
                                year={movie.release_date && movie.release_date.substring(0,4)} 
                                isMovie={true} 
                            />
                        ))}    
                    </Section>
                )}
                {TVResult && TVResult.length > 0 && (
                    <Section title="TV Results">
                        {TVResult.map(show => (
                            <Poster
                                key = {show.id}
                                id = {show.id}
                                imageUrl = {show.poster_path}
                                title = {show.name}
                                rating = {show.vote_average}
                                year = {show.first_air_date && show.first_air_date.substring(0, 4)}
                                isMovie = {false}
                            />
                        ))}    
                    </Section>
                )}
                {error && <Message text={error} color="red" />}
                {TVResult && movieResult && TVResult.length === 0 && movieResult.length === 0 && 
                    <Message text="Nothing Found" color="grey" />
                }
            </Container>
        </>
    )
}


export default Search;