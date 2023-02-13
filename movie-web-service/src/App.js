import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  // async, await를 사용하기 위해 getMovies라는 함수 생성

  useEffect(()=>getMovies(),[]);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        <div>{movies.map((item)=>
          <div key={item.key}>
            <img src={item.medium_cover_image} />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
              {item.genres.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>)}
        </div>
      }
    </div>
  );
}

export default App;