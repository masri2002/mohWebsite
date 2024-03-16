import './App.css';
import { Home } from './Pages/HomePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtfolioPage } from './Pages/ProtfolioPage/ProtfolioPage';
import { Art } from './Pages/ArtPrints/Art';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/portfolio" element={<ProtfolioPage />} />
        </Routes>
        <Routes>
          <Route path="/artprints" element={<Art />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
