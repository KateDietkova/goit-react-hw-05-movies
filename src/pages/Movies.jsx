import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { getFilmByKeyword } from 'services/fetchApi';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const searchMovie = query !== '' ? { query } : {};
    setSearchParams(searchMovie);
  };

  useEffect(() => {
    if (!movie) {
      return;
    }
    const getMovie = async () => {
      try {
        const findedMovie = await getFilmByKeyword(movie);
        console.log('In Movies', findedMovie);
        setMovies(findedMovie);
      } catch (error) {
        console.log('Error in Movies', error);
      }
    };
    getMovie();
  }, [movie]);

  return (
    <main>
      <section>
        <SearchBox onUpdateQuery={updateQueryString} />
        {movies && <MoviesList movies={movies} /> }
      </section>
    </main>
  );
};
