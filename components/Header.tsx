import { NavLink } from './NavLink';

export const Header = () => (
  <header className="max-w-6xl mx-auto w-full">
    <nav className="bg-gray-700 text-white px-4 py-2">
      <NavLink to="/" text="Home" additionalClasses="mr-4" />
      <NavLink to="/about" text="About" />
    </nav>
  </header>
);
