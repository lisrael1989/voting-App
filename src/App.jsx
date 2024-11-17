// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { AppHeader } from './components/AppHeader.jsx';
// import { HomePage } from './components/views/HomePage.jsx';
// import { PlayersIndex } from './components/views/PlayersIndex.jsx';
// import { LoginPage } from './components/LogainPage.jsx';
// import './assets/main.css';
// import { useState } from 'react';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (user) => {
//     setIsLoggedIn(true);
//     navigate('/players');
//   };
//   return (
//     <>
//       <AppHeader />
//       <section className="app main-layout">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/players"
//             element={
//               isLoggedIn ? (
//                 <PlayersIndex />
//               ) : (
//                 <LoginPage onLogin={handleLogin} />
//               )
//             }
//           />{' '}
//         </Routes>
//       </section>
//     </>
//   );
// }

// export default App;

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import { PlayersIndex } from './components/views/PlayersIndex.jsx';
import { LoginPage } from './components/LogainPage.jsx';
import './assets/main.css';

function App() {
  const [user, setUser] = useState(null); // Track logged-in user
  const navigate = useNavigate();

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser); // Set logged-in user
    navigate('/players'); // Redirect to players page upon login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate('/'); // Redirect to HomePage
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
