import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { HomePage } from './components/views/HomePage.jsx';
import './assets/main.css';

function App() {
  return (
    <>
      <AppHeader />
      <section className="app main-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/players" element={<StayDetails />} /> */}
        </Routes>
      </section>
    </>
  );
}

export default App;
