import {useState, useEffect} from "react";
import {moviesApi} from "api";
import useInfiniteScroll from "./useInfiniteScroll";
import uniqBy from "lodash.uniqby";

const useGetMovie = (url) => {
    const [result, setResult] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const page = useInfiniteScroll();

    const getInitialData = async () => {
        try{
            let movies = null
            if(url === "/movie"){
                const {data: {results}} = await moviesApi.nowPlaying(page);
                movies = results;
            } else if(url === "/movie/upcoming"){
                const {data: {results}} = await moviesApi.upComing(page);
                movies = results;
            } else if(url === "/movie/popular"){
                const {data: {results}} = await moviesApi.popular(page);
                movies = results;
            } else{
                const {data: {results}} = await moviesApi.topRated(page);
                movies = results;
            }
            setResult(movies);

        } catch{
            setError("Can not get movies");
        } finally{
            setLoading(false);
        }
    }

    const getMoreData = async () => {
        try{
            let newMovies = null
            if(url === "/movie"){
                const {data: {results}} = await moviesApi.nowPlaying(page);
                newMovies = results;
            } else if(url === "/movie/upcoming"){
                const {data: {results}} = await moviesApi.upComing(page);
                newMovies = results;
            } else if(url === "/movie/popular"){
                const {data: {results}} = await moviesApi.popular(page);
                newMovies = results;
            } else{
                const {data: {results}} = await moviesApi.topRated(page);
                newMovies = results;
            }

            const allResult = [...result, ...newMovies];

            setResult(uniqBy(allResult, "id"));

        } catch{
            setError("Can not get movies");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getInitialData();
    }, []);

    useEffect(() => {
        setLoading(true);
        getMoreData();
    }, [page])

    return [result, error, loading];
        
};

export default useGetMovie;