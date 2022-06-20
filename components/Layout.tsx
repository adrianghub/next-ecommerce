import { Header } from './Header';
import { Footer } from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col w-full mx-auto min-h-screen max-w-screen-2xl">
    <Header />
    <main className="flex-grow py-6 px-6">{children}</main>
    <Footer />
  </div>
);
