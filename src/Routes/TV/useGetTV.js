import {useState, useEffect} from "react";
import {tvApi} from "api";
import useInfiniteScroll from "./useInfiniteScroll";
import uniqBy from "lodash.uniqby";

const useGetTV = (url) => {
    const [result, setResult] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const page = useInfiniteScroll();

    const getInitialData = async () => {
        try{
            let shows = null
            if(url === "/show"){
                const {data: {results}} = await tvApi.popular(page);
                shows = results;
            } else if(url === "/show/onTheAir"){
                const {data: {results}} = await tvApi.onTheAir(page);
                shows = results;
            } else if(url === "/show/airingToday"){
                const {data: {results}} = await tvApi.airingToday(page);
                shows = results;
            } else{
                const {data: {results}} = await tvApi.topRated(page);
                shows = results;
            }
            setResult(shows);
        } catch{
            setError("Can not get shows");
        } finally{
            setLoading(false);
        }
    }

    const getMoreData = async () => {
        try{
            let newShows = null
            if(url === "/show"){
                const {data: {results}} = await tvApi.popular(page);
                newShows = results;
            } else if(url === "/show/onTheAir"){
                const {data: {results}} = await tvApi.onTheAir(page);
                newShows = results;
            } else if(url === "/show/airingToday"){
                const {data: {results}} = await tvApi.airingToday(page);
                newShows = results;
            } else{
                const {data: {results}} = await tvApi.topRated(page);
                newShows = results;
            }

            const allResult = [...result, ...newShows];

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

export default useGetTV;