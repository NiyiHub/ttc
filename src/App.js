import './App.scss';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Doctor from './components/Doctor/Doctor';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='doctor' element={<Doctor/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Routes>
    </Router>
  );
}

export default App;
