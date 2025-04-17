'use client'; // CSR로 바뀐 것 같지만? 사실 아님 SSR임 이 컴포넌트에게 interactive해야한다고 선언

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '❤️' : ''}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>
          {path === '/about-us' ? '❤️' : ''}
        </li>
      </ul>
    </nav>
  );
}
