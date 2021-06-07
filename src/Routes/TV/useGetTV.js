import {useState, useEffect} from "react";
import {tvApi} from "api";
import useInfiniteScroll from "./useInfiniteScroll";
import uniqBy from "lodash.uniqby";

const useGetTV = () => {
    const [result, setResult] = useState({
        topRated : null, 
        popular : null,
        airingToday : null,
        onTheAir : null
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const page = useInfiniteScroll();

    const getInitialData = async () => {
        try{
            const {data: {results: topRated}} = await tvApi.topRated(page);
            const {data: {results: popular}} = await tvApi.popular(page);
            const {data: {results: airingToday}} = await tvApi.airingToday(page);
            const {data: {results: onTheAir}} = await tvApi.onTheAir(page);

            setResult({
                topRated: topRated,
                popular: popular, 
                airingToday: airingToday, 
                onTheAir: onTheAir
            })
        } catch{
            setError("Can not get movies");
        } finally{
            setLoading(false);
        }
    }

    const getMoreData = async () => {
        try{
            const {data: {results: newTopRated}} = await tvApi.topRated (page);
            const {data: {results: newPopular}} = await tvApi.popular (page);
            const {data: {results: newAiringToday}} = await tvApi.airingToday (page);
            const {data: {results: newOnTheAir}} = await tvApi.onTheAir (page);
            
            const allTopRated = [...result.topRated, ...newTopRated];
            const allPopular = [...result.popular, ...newPopular];
            const allAiringToday = [...result.airingToday, ...newAiringToday];
            const allOnTheAir = [...result.onTheAir, ...newOnTheAir];
            setResult({
                nowPlaying: uniqBy(allTopRated, "id"), 
                upComing: uniqBy(allPopular, "id"), 
                popular: uniqBy(allAiringToday, "id"), 
                topRated: uniqBy(allOnTheAir, "id")
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

export default useGetTV;