import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChartsAndMaps from './pages/ChartsAndMaps';
import Contacts from './pages/Contacts';
import Sidebar from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Sidebar children={<Contacts />} />
        } />
        <Route path="/charts" element={
          <Sidebar children={<ChartsAndMaps />} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
