// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function Detail() {
//     const [loading, setLoading] = useState(true);
//     const [movies, setMovies] = useState([]);

//     const {id} = useParams();
//     console.log(id);
    
//     useEffect(()=>{
//         getMovie();
//     },[]);
 
//     const getMovie = async() => {
//         const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
//         setMovies(json.data.movie);
//         setLoading(false);
//     }

    
//     console.log(movies);
//   return (
//     <div>
//         <h1>hi</h1>
//         {loading ? (<h1>Loading</h1>): (
//             <div>
//                 <div>{movies.title}</div>
//             </div>
//         )}
//     </div>

//   )
// }
// export default Detail;

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