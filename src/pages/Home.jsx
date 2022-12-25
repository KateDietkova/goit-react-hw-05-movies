import { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from '../components/MoviesList/MoviesList';

const API_KEY = '579a7483bae7d6a5a25eb4c1ddded2cf';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const response = await axios.get(
          `/trending/movie/day?api_key=${API_KEY}`
        );
        console.log(response.data.results);
        const moviesTrend = response.data.results;
        setMovies(moviesTrend);
        return moviesTrend;
      } catch (error) {
        console.log('Something went wrong in Home', error);
      }
    };
    getTrendMovies();

  }, []);


  return (
    <main>
      <section>{movies.length > 0 && <MoviesList movies={movies} />}</section>
    </main>
  );
};
