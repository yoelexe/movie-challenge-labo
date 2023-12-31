import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Trending = () => {

  const navigate = useNavigate()

  const [movies, setmovies] = useState([])

  const getTrending = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=49e8c67adf3bbd50a3fce82777bba341'
    const res = await fetch(url)
    const data = await res.json()
    setmovies(data.results)
  }

  useEffect(() => {
    getTrending()
  }, [])
  

  return (
    <div>
      {movies.map((pelicula) => (
        <div key={pelicula.id}>
          <p>Name: {pelicula.title}</p>
          <img
          onClick={() => navigate('movies')}
          style={{ cursor: 'pointer'}}
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.name}
          />
        </div>
      ))}
    </div>
  );
}
