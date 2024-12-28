import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
function useRatingFilm(movieId) {
    const [rate, setRate] = useState(0);
    useEffect(() => {
        const getRate = async () => {
            const response = await fetch('/Api/api/films/getRate', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ movieId }),
            });
            const data = await response.json();
            if (response.ok) {
                setRate(data);
            } else {
                console.log(data.error);
            }
        };
        getRate();
    }, []);

    const RatingFilm = async (movieId, rate) => {
        const response = await fetch('/Api/api/films/rating', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movieId, star: rate }),
        });
        const data = await response.json();
        if (!response.ok) {
            toast.error('Vui lòng đăng nhập !!!');
        } 
        return { response, data };
    };
    return { RatingFilm, rate, setRate };
}

export default useRatingFilm;
