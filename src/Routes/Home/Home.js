import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import useGetHome from "./useGetHome";
import HomeDetail from "Components/HomeDetail"
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Footer from "Components/Footer";


const Container = styled.div`
    padding: 50px 1.5rem;
`;

const Home = () => {

    const [popularMovies, popularShow, randomMovie, error, loading] = useGetHome();
    
    return (
        loading ? <Loader/> : (
            <>
                <Helmet><title>watchup</title></Helmet>
                <HomeDetail movie={randomMovie}/>
                <Container>
                    {popularMovies && popularMovies.length > 0 && (
                        <Section title="Popular Movies">
                            {popularMovies.map(movie => (
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
                    {popularShow && popularShow.length > 0 && (
                        <Section title="Popular Shows">
                            {popularShow.map(show => (
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
                    {error && <Message title={error}  />}
                </Container>
                <Footer />
            </>
        )
    );

};

export default Home;