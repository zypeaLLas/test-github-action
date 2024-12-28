import { useState, useEffect } from 'react';

const useGetFilm = (id) => {
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const getFilmInfor = async () => {
            const response = await fetch(`/Api/api/films/get-detail/${id}`,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                credentials: 'include',});
            const data = await response.json();
            if (response.ok) {
                setFilm(data.datas);
            } else {
                console.log(data.message);
            }
        };
        getFilmInfor();
    }, []);
    return { film };
};

export default useGetFilm;
