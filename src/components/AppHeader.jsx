import { Link, NavLink } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="app-header full">
      <Link to="/" className="logo">
        Voting NBA Players App
      </Link>

      <nav className="app-nav">
        <NavLink to="/">Home</NavLink> |<NavLink to="/about">About</NavLink> |
        <NavLink to="/players">Players</NavLink>
      </nav>
    </header>
  );
}
