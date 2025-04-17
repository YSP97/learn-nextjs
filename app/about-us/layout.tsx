export const metadata = {
  title: 'About us',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      다른 Layout을 만들어보자
    </div>
  );
}
