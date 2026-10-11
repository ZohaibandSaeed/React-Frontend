import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAPI() {
            try {
                const payload = await fetch(url);
                const data = await payload.json();
                setData(data);
            } catch (error) {
                setIsLoading(false);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchAPI();
    }, [url]);

    return { data, error, isLoading };
}


export default useFetch;