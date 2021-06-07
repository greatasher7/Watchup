import React, { Fragment } from "react";
import Poster from "Components/Poster";
import Section from "Components/Section";


export const MovieFrame = (props) => {
    return(
        <Fragment>
            {props.contents && props.contents.length > 0 && (
            <Section title={props.title}>
                {props.contents.map(movie => (
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
        </Fragment>
    );
}

export const TVFrame = (props) => {
    return(
        <Fragment>
            {props.contents && props.contents.length > 0 && (
            <Section title={props.title}>
                {props.contents.map(show => (
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
        </Fragment>
    );
}

