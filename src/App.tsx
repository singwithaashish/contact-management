import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChartsAndMaps from './pages/ChartsAndMaps';
import Contacts from './pages/Contacts';
import Sidebar from './components/Layout/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contacts" element={
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
