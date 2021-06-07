import {useState, useEffect} from "react";


const useInfiniteScroll = () => {
    const [page, setPage] = useState(1);

    function handleScroll() {
        if(document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight){
            setPage(p => p + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return page;
}

export default useInfiniteScroll;