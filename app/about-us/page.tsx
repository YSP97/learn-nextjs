'use client';

import { usePathname } from 'next/navigation';
import Navigation from '../../components/navigation';

export default function AboutUs() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <Navigation />
      <h1>About Us!</h1>
    </>
  );
}
