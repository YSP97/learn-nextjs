'use client';
import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, poster_path, id }: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
