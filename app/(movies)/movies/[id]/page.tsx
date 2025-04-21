import { API_URL } from '../../../(home)/page';


// getMovie, getVideo를 둘 다 서버 컴포넌트로 분리하여 개별적으로 render하도록

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1> {movie.title} </h1>;
}
