import axios from "axios";

const api = axios.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
       api_key: "2aba01b0fce18e86ed1cee2e83403b06",
       language: "en-US"
   } 
});

export const moviesApi = {
    nowPlaying: (page = 1) => api.get("/movie/now_playing", {params: {page, limit: 50}}), 
    upComing: (page = 1) => api.get("/movie/upcoming", {params: {page, limit: 50}}), 
    popular: (page = 1) => api.get("/movie/popular", {params: {page, limit: 50}}),
    topRated: (page = 1) => api.get("/movie/top_rated", {params: {page, limit: 50}}),
    movieDetail: id => api.get(`/movie/${id}`, {
        params: {
            append_to_reponse: "video"
        }
    }),
    movieCredit: id => api.get(`/movie/${id}/credits`),
    movieReview: id => api.get(`/movie/${id}/reviews`),
    movieRelated: id => api.get(`/movie/${id}/similar`),
    search: term => api.get(`/search/movie`, {
        params: {
            query: term
        }
    }),
};

export const tvApi = {
    topRated: (page = 1) => api.get("/tv/top_rated", {params: {page, limit: 50}}), 
    popular: (page = 1) => api.get("/tv/popular", {params: {page, limit: 50}}), 
    airingToday: (page = 1) => api.get("/tv/airing_today", {params: {page, limit: 50}}), 
    onTheAir: (page = 1) => api.get("/tv/on_the_air", {params: {page, limit: 50}}), 
    showDetail: id => api.get(`/tv/${id}`, {
        params: {
            append_to_reponse: "video"
        }
    }),
    showCredit: id => api.get(`/tv/${id}/credits`),
    showReview: id => api.get(`/tv/${id}/reviews`),
    showRelated: id => api.get(`/tv/${id}/similar`),
    search: term => api.get(`/search/tv`, {
        params: {
            query: term
        }
    })
};

export const peopleApi = {
    people: (page = 1) => api.get("/trending/person", {params: {page, limit: 50}})
}

const apiYoutube = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyDcIKLAqWuKeQmS5Gb07eZjeQvH3V0u5ZY",
        chart: "mostPopular",
        maxRusults: "2",
        part: "snippet"
    } 
 });


export const youtubeApi = {
    searchForId: (title) => apiYoutube.get("/search", {params: {q: title}})
}


