import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 백엔드 API 요청이 느린 경우를 가정하여 5초의 딜레이 설정
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 백엔드 API 요청이 느린 경우를 가정하여 5초의 딜레이 설정
  const response = await fetch(`${API_URL}/${id}/videos`);

  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('Start Fetching');
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('End Fetching');
  return <h1> {movie.title} </h1>;
}
