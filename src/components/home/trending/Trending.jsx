import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./trending.css";

export const Trending = () => {
  const navigate = useNavigate();

  const [movies, setmovies] = useState([]);

  const getTrending = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=49e8c67adf3bbd50a3fce82777bba341";
    const res = await fetch(url);
    const data = await res.json();
    setmovies(data.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-14 ">
      <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium">Now In Cinemas</h3>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer">See all</a>
      </div>
      {/* grid card */}
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((pelicula) => (
        <div 
        className="my-8 rounded-xl shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-200 hover:-translate-y-1"
        key={pelicula.id}>
          <figure>
          <img
          className="cursor-pointer rounded-t-lg"
          onClick={() => navigate('movies')}
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.name}
          />
          <figcaption>
          <p className="text-center mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{pelicula.title}</p>
          </figcaption>
          </figure>
          
        </div>
      ))}
      </div>
    </section>
  );
};
