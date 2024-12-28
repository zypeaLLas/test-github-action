import { useEffect, useState } from 'react';

const useSearchFilm = (name) => {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        const searchFilms = async () => {
            const response = await fetch('/Api/api/films/search-film', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name }),
            })

            const data = await response.json();
            if (response.ok) {
                setSearchResult(data)
            }


        };
        searchFilms();
    }, [])
    return { searchResult };


};

export default useSearchFilm;