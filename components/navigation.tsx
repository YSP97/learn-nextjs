'use client'; // CSR로 바뀐 것 같지만? 사실 아님 SSR임 이 컴포넌트에게 interactive해야한다고 선언

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '❤️' : ''}
        </li>
        <li>
          <Link href="/introduction">introduction</Link>
          {path === '/introduction' ? '❤️' : ''}
        </li>
        <li>
          <Link href="/routing">routing</Link>
          {path === '/routing' ? '❤️' : ''}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
