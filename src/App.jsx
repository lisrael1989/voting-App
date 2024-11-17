import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import { PlayersIndex } from './components/views/PlayersIndex.jsx';
import { LoginPage } from './components/LoginPage.jsx';
import './assets/main.css';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    navigate('/players');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <AppHeader user={user} onLogout={handleLogout} />
      <section className="app main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/players"
            element={
              user ? <PlayersIndex /> : <LoginPage onLogin={handleLogin} />
            }
          />
        </Routes>
      </section>
    </>
  );
}

export default App;
