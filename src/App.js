import './App.scss';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Doctor from './components/Doctor/Doctor';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Homepage from './components/Doctor/Homepage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='doctor' element={<Doctor/>} >
            <Route path='doctor/home' element={<Homepage/>}/>
          </Route> */}
          <Route path='/doctor'>
              <Route index element={<Doctor/>}/>
              <Route path='/doctor/home' element={<Homepage/>} />
          </Route>
          <Route path='admin' element={<Admin/>} />
        </Routes>
    </Router>
  );
}

export default App;
