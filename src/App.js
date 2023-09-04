import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import {useSelector, useDispatch} from 'react-redux';
import { toggleDarkMode } from './features/darkModeSlice';
function App() {
  const {mode} = useSelector((state)=>state.darkMode);
  const dispatch= useDispatch();
  return (
    <div style={{background: mode? 'black': 'white', color:mode? 'white':'blue', height:"80vh", marginTop:"-8px"}}>
      <h2>Geekster</h2>
    <Router>
      {/* <h2>Geekster</h2> */}
      <Header/>
      <button style={{cursor:"pointer"}} onClick={()=>dispatch(toggleDarkMode())}>{mode? "Toggle theam to light" :"Toggle theam to dark"}</button>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;