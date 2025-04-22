import { Metadata } from 'next';
import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../constants';

export const metadata: Metadata = {
  title: 'Home',
};

async function getMovies() {
  const respone = await fetch(API_URL);
  const json = await respone.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
