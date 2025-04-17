import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  console.log('im fetching'); // 서버컴포넌트이므로 프론트엔드에서는 콘솔창에 출력되지 않음(백엔드에서만 출력됨!)
  const respone = await fetch(URL);
  const json = await respone.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <>{JSON.stringify(movies)}</>;
}
