import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../../public/data/users.json';

export function useAuth() {
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

  return { user, users, handleLogin, handleLogout };
}
