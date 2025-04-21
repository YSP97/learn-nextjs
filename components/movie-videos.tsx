import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 10000)); // 백엔드 API 요청이 느린 경우를 가정하여 10초의 딜레이 설정
  throw new Error ('에러...') // 에러 발생시
  // const response = await fetch(`${API_URL}/${id}/videos`);

  // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
