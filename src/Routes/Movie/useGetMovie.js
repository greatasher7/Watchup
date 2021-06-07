import {useState, useEffect} from "react";
import {moviesApi} from "api";
import useInfiniteScroll from "./useInfiniteScroll";
import uniqBy from "lodash.uniqby";

const useGetMovie = () => {
    const [result, setResult] = useState({
        nowPlaying : null, 
        upComing : null,
        popular : null,
        topRated : null
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const page = useInfiniteScroll();

    const getInitialData = async () => {
        try{
            const {data: {results: nowPlaying}} = await moviesApi.nowPlaying(page);
            const {data: {results: upComing}} = await moviesApi.upComing(page);
            const {data: {results: popular}} = await moviesApi.popular(page);
            const {data: {results: topRated}} = await moviesApi.topRated(page);
            
            setResult({
                nowPlaying: nowPlaying,
                upComing: upComing, 
                popular: popular, 
                topRated: topRated
            })
        } catch{
            setError("Can not get movies");
        } finally{
            setLoading(false);
        }
    }

    const getMoreData = async () => {
        try{
            const {data: {results: newNowPlaying}} = await moviesApi.nowPlaying(page);
            const {data: {results: newUpComing}} = await moviesApi.upComing(page);
            const {data: {results: newPopular}} = await moviesApi.popular(page);
            const {data: {results: newTopRated}} = await moviesApi.topRated(page);

            const allNowPlaying = [...result.nowPlaying, ...newNowPlaying];
            const allUpComing = [...result.upComing, ...newUpComing];
            const allPopular = [...result.popular, ...newPopular];
            const allTopRated = [...result.topRated, ...newTopRated];
            setResult({
                nowPlaying: uniqBy(allNowPlaying, "id"), 
                upComing: uniqBy(allUpComing, "id"), 
                popular: uniqBy(allPopular, "id"), 
                topRated: uniqBy(allTopRated, "id")
            })
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