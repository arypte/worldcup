import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Worldcup from './pages/WorldCup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<Worldcup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
