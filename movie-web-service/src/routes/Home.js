import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  // async, await를 사용하기 위해 getMovies라는 함수 생성

  useEffect(()=>{
    getMovies();
  },[]);
  
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        (
          <div>
            {movies.map((movie)=><Movie key={movie.id} id={movie.id} summary={movie.summary} coverImg={movie.medium_cover_image} title={movie.title} genres={movie.genres} />)}
          </div>
        )
      }
    </div>
  );
}

export default Home;