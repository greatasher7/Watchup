import React from "react";
import PropTypes from "prop-types";
import useGetTV from "./useGetTV";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Section from "Components/Section";

export default function TVFrame ({match: {url}, title}) {

    const [result, error, loading] = useGetTV(url);

    return(
            <>
                {loading && <Loader />}
                {result && result.length > 0 && (
                 <Section title={title}>
                    {result.map(show => (
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
                {error && <Message title={error} color="red" />}
            </>
    );
}

TVFrame.propTypes = {
    title: PropTypes.string.isRequired
}