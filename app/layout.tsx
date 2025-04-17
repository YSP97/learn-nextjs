import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...',
  },
  description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h6>나는 Layout임</h6>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
