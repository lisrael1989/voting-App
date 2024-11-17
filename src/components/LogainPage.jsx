import { useState } from 'react';
import UsersData from '../..//data/users.json';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      const userExists = UsersData.users.find((u) => u.email === email);
      if (userExists) {
        setError('User already exists. Please log in.');
        return;
      }

      const newUser = { id: Date.now(), name, email, password, isAdmin: false };
      UsersData.users.push(newUser);
      onLogin(newUser);
      setSuccessMessage('Sign-up successful! You are now logged in.');
    } else {
      const user = UsersData.users.find(
        (u) => u.email === email && u.password === password
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

  return (
    <section className="login-page">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button
              className="toggle-btn"
              onClick={() => {
                setIsSignUp(false);
                setError('');
                setSuccessMessage('');
              }}
            >
              Log in
            </button>
          </>
        ) : (
          <>
            Dont have an account?{' '}
            <button
              className="toggle-btn"
              onClick={() => {
                setIsSignUp(true);
                setError('');
                setSuccessMessage('');
              }}
            >
              Sign up
            </button>
          </>
        )}
      </p>
      {successMessage && <p className="success">{successMessage}</p>}
    </section>
  );
}
