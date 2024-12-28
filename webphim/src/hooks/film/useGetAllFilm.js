import { useState, useEffect } from 'react';

const useGetAllFilm = () => {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        const getFilmsInfor = async () => {
            const response = await fetch('/Api/api/films/',{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                credentials: 'include',});
            const data = await response.json();
            if (response.ok) {
                setFilmList(data.datas);
            }
            console.log(data.message);
        };
        getFilmsInfor();
    }, []);
    return { filmList };
};

export default useGetAllFilm;
