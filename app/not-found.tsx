import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return <h1>존재하지 않는 페이지!</h1>;
}
