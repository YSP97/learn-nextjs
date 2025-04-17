import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  const respone = await fetch(URL);
  const json = await respone.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <>{JSON.stringify(movies)}</>;
}
