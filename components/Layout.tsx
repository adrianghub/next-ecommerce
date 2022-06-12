import { Header } from './Header';
import { Footer } from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col max-w-6xl mx-auto min-h-screen px-6">
    <Header />
    <main className="flex-grow py-6">
      {children}
    </main>
    <Footer />
  </div>
);
