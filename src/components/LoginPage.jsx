import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignUp) {
      const userExists = storedUsers.find((u) => u.email === formData.email);
      if (userExists) {
        setError('User already exists. Please log in.');
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        isAdmin: false,
      };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      onLogin(newUser);
      setSuccessMessage('Sign-up successful! You are now logged in.');
    } else {
      const user = storedUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        onLogin(user);
        setSuccessMessage(`Welcome back, ${user.name}!`);
      } else {
        setError('Invalid email or password');
        setSuccessMessage('');
      }
    }
  };

  const handleGuestAccess = () => {
    const guestUser = { id: 'guest', name: 'Guest', isAdmin: false };
    onLogin(guestUser);
    navigate('/players');
  };

  return (
    <section className="login-page">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <p>
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button onClick={() => setIsSignUp(false)}>Log in</button>
          </>
        ) : (
          <>
            Dont have an account?{' '}
            <button onClick={() => setIsSignUp(true)}>Sign up</button>
          </>
        )}
      </p>
      <button className="guest-btn" onClick={handleGuestAccess}>
        Continue as Guest
      </button>
    </section>
  );
}
