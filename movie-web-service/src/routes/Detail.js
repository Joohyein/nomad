import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Datail() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            setMovie(json.data.movie)
    }

    useEffect(() => {
        setLoading((prev) => true);
        getMovie();
        setLoading((prev) => false);
    }, [])

    return (
        <>
            {loading ? <>Loading</>:
            <div>
                <h1>{movie.title_long}</h1>
                <img src={movie.medium_cover_image} />
                <p>{movie.description_full}</p>
            </div>}
        </>
    )
}
export default Datail