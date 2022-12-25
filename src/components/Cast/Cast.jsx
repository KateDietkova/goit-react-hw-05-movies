import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPosterFilm, getFilmCast } from 'services/fetchApi';
import { CastGallery, CastItem, CastImg, CastName } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await getFilmCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log('Error in Cast', error);
      }
    };
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
    }

  return (
    <CastGallery>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <CastItem key={cast_id}>
          <CastImg src={getPosterFilm(profile_path)} alt={name} />
          <CastName>{name}</CastName>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastGallery>
  );
};
