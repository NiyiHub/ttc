import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Doctor from './components/Doctor/Doctor';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Layout from './components/Doctor/Layout';
import Homepage from './components/Doctor/Homepage/Homepage';
import Profile from './components/Doctor/Profile/Profile';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctor'>
              <Route index element={<Doctor/>}/>
              <Route path='home' element={<Layout/>} >
                <Route path='main' element={<Homepage/>} />
                <Route path='profile' element={<Profile/>} />
              </Route>
          </Route>
          <Route path='admin' element={<Admin/>} />
        </Routes>
    </Router>
  );
}

export default App;
