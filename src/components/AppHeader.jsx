import { NavLink } from 'react-router-dom';

export function AppHeader({ user, onLogout }) {
  return (
    <header className="app-header">
      <NavLink to="/">
        <img className="logo" src="/logo.png" alt="logo" />
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/players"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Players
                </NavLink>
              </li>
              {user.isAdmin && (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive ? 'active-link' : ''
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li className="user-info">
                <p>Hello, {user.name}</p>
                <button className="logout-btn" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="login-nav">
              <NavLink
                to="/players"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
