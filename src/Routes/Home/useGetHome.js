import React, {useState, useEffect} from "react";
import {moviesApi, tvApi} from "api";

const useGetHome = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [popularShow, setPopularShow] = useState(null);
    const [randomMovie, setRandomMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const getData = async () => {
        
        try{
            const {data: {results: popularMovies}} = await moviesApi.popular();
            const {data: {results: popularShow}} = await tvApi.popular();
            
            setPopularMovies(popularMovies);
            setPopularShow(popularShow);
            
            const randomNumber = Math.round(Math.random() * 19);
            const randomId = (popularMovies && popularMovies.length > 0 && popularMovies.map(movie => movie.id)[randomNumber]);
            const {data: randomMovie} = await moviesApi.movieDetail(randomId);
            setRandomMovie(randomMovie);

        } catch{
            setError("Can not get movies");
        } finally{
            setLoading(false);
        }
    } 

    useEffect(() => {
        getData();
    }, []);
    
    return [popularMovies, popularShow, randomMovie, error, loading];
        
};

export default useGetHome;