import { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { title } from 'process';
interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  // 13버전부터는 next.js가 fetch한 데이터를 자동으로 캐싱함 -> 따라서, 두 번 fetch하는 것이 아님
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      {/* 두 컴포넌트 모두 await해줘야하는 비동기 컴포넌트이다 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
