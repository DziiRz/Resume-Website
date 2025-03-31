import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col w-full max-w-[2000px] mx-auto">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};
