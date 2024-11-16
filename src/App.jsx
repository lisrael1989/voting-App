import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import { PlayersIndex } from './components/views/PlayersPage.jsx';
import './assets/main.css';

function App() {
  return (
    <>
      <AppHeader />
      <section className="app main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersIndex />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
