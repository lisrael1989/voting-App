import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import { PlayersIndex } from './components/views/PlayersIndex.jsx';
import { LoginPage } from './components/LoginPage.jsx';
import { Admin } from './components/views/Admin.jsx';
import { useAuth } from './hooks/useAuth.js';
import './assets/main.css';

function App() {
  const { user, users, handleLogin, handleLogout } = useAuth();

  return (
    <>
      <AppHeader user={user} onLogout={handleLogout} />
      <section className="app main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/players"
            element={
              user ? (
                <PlayersIndex user={user} />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin"
            element={
              user?.isAdmin ? (
                <Admin users={users} />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
