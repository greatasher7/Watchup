import React from "react";
import PropTypes from "prop-types";
import useGetMovie from "./useGetMovie";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Section from "Components/Section";

export default function MovieFrame ({match: {url}, title}) {

    const [result, error, loading] = useGetMovie(url);

    return(
            <>
                {loading && <Loader />}
                {result && result.length > 0 && (
                <Section title={title}>
                    {result.map(movie => (
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
                {error && <Message title={error} color="red" />}
            </>
    );
}

MovieFrame.propTypes = {
    title: PropTypes.string.isRequired
}