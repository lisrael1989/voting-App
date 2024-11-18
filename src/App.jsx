import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import { PlayersIndex } from './components/views/PlayersIndex.jsx';
import { LoginPage } from './components/LoginPage.jsx';
import usersData from '../public/data/users.json';
import { Admin } from './components/views/Admin.jsx';
import './assets/main.css';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.length === 0) {
      localStorage.setItem('users', JSON.stringify(usersData.users));
    }
    setUsers(storedUsers);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    navigate(loggedInUser.isAdmin ? '/admin' : '/players');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
