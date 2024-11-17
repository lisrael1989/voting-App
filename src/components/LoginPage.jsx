// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import UsersData from '../../data/users.json';

// export function LoginPage({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignUp) {
//       const userExists = UsersData.users.find((u) => u.email === email);
//       if (userExists) {
//         setError('User already exists. Please log in.');
//         return;
//       }

//       const newUser = { id: Date.now(), name, email, password, isAdmin: false };
//       UsersData.users.push(newUser);
//       onLogin(newUser);
//       setSuccessMessage('Sign-up successful! You are now logged in.');
//     } else {
//       const user = UsersData.users.find(
//         (u) => u.email === email && u.password === password
//       );
//       if (user) {
//         onLogin(user);
//         setSuccessMessage(`Welcome back, ${user.name}!`);
//       } else {
//         setError('Invalid email or password');
//         setSuccessMessage('');
//       }
//     }
//   };

//   return (
//     <section className="login-page">
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//         )}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>
//         {isSignUp ? (
//           <>
//             Already have an account?{' '}
//             <button
//               className="toggle-btn"
//               onClick={() => {
//                 setIsSignUp(false);
//                 setError('');
//                 setSuccessMessage('');
//               }}
//             >
//               Log in
//             </button>
//           </>
//         ) : (
//           <>
//             Dont have an account?{' '}
//             <button
//               className="toggle-btn"
//               onClick={() => {
//                 setIsSignUp(true);
//                 setError('');
//                 setSuccessMessage('');
//               }}
//             >
//               Sign up
//             </button>
//           </>
//         )}
//       </p>
//       {successMessage && <p className="success">{successMessage}</p>}
//     </section>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignUp) {
      const userExists = storedUsers.find((u) => u.email === email);
      if (userExists) {
        setError('User already exists. Please log in.');
        return;
      }

      const newUser = { id: Date.now(), name, email, password, isAdmin: false };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      onLogin(newUser);
      setSuccessMessage('Sign-up successful! You are now logged in.');
    } else {
      const user = storedUsers.find(
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

  const handleGuestAccess = () => {
    // Log in as a guest
    const guestUser = { id: 'guest', name: 'Guest', isAdmin: false };
    onLogin(guestUser);
    navigate('/players'); // Redirect to players
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
