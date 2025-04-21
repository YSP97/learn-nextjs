import { API_URL } from '../app/(home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 백엔드 API 요청이 느린 경우를 가정하여 5초의 딜레이 설정
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
}

export default async function MovieInfo(id: string) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
