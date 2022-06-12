import { ActiveLink } from './ActiveLink';

export const Header = () => (
  <header className="max-w-6xl mx-auto w-full">
    <nav className="bg-gray-700 text-white px-4 py-2">
      <ActiveLink to="/" text="Home" additionalClasses="mr-4" />
      <ActiveLink to="/about" text="About" />
    </nav>
  </header>
);
