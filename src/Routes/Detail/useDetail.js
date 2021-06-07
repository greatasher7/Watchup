import {useState, useEffect} from "react";
import {moviesApi, tvApi} from "api";

const useDetail = ({location: {pathname}, match: {params: {id}}}) => {

    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const isMovie = pathname.includes("/movie-detail/");
    const parsedID = parseInt(id);

    const getDetail = async () => {
        let detailResult
        let castResult;
        let reviewResult;
        let relatedResult
        try{
            if(isMovie){
                const request = await moviesApi.movieDetail(parsedID);
                const castRequest = await moviesApi.movieCredit(parsedID);
                const reviewRequest = await moviesApi.movieReview(parsedID);
                const relatedRequest = await moviesApi.movieRelated(parsedID);
                detailResult = request.data;
                castResult = castRequest.data.cast;
                reviewResult = reviewRequest.data.results;
                relatedResult = relatedRequest.data.results;
                console.log(relatedResult);
                setResult([detailResult, castResult, reviewResult, relatedResult]);
            } else{
                const request = await tvApi.showDetail(parsedID);
                const castRequest = await tvApi.showCredit(parsedID);
                const reviewRequest = await tvApi.showReview(parsedID);
                const relatedRequest = await tvApi.showRelated(parsedID);
                detailResult = request.data;
                castResult = castRequest.data.cast;
                reviewResult = reviewRequest.data.results;
                relatedResult = relatedRequest.data.results;
                setResult([detailResult, castResult, reviewResult, relatedResult]);

            }
        } catch{
            setError("Can not find anything");
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getDetail();
    }, [])

    return [loading, ...result];

}

export default useDetail;