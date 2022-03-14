import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await(
                fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                )
            ).json()
        setMovie(() => json.data.movie);
    }
    useEffect(() => {
        getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            <p>{movie.title}</p>
        </div>
    )
}

export default Detail;