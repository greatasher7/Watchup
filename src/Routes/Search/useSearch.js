import {useState} from "react";
import {tvApi, moviesApi} from 'api';

const useSearch = () => {
    const [movieResult, setMovieResult] = useState(null);
    const [TVResult, setTVResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const updateTerm = (e) => {
        const {target: {value}} = e;
        setSearchTerm(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm !== ""){
            searchByTerm();
        }
    }
    
    const searchByTerm = async () => {
        setLoading(true);
        try{
            const {data: {results: movieResult}} = await moviesApi.search(searchTerm)
            const {data: {results: TVResult}} = await tvApi.search(searchTerm)
            setMovieResult(movieResult);
            setTVResult(TVResult);
        } catch{
            setError("Can not find anything");
        } finally{
            setLoading(false);
        }
    }

    return [{movieResult, TVResult, loading, error}, updateTerm, handleSubmit];
};

export default useSearch;