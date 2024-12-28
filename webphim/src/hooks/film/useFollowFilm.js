import toast from 'react-hot-toast';
function useFollowFilm() {
    const FollowFilm = async (id) => {
        const response = await fetch('/Api/api/films/follow', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movieId: id }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success('Thanh cong!');
        } else {
            toast.error('Vui lòng đăng nhập !!!');

        }
        return { response, data };
    };
    return { FollowFilm };
}

export default useFollowFilm;
