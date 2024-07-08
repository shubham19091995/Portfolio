import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResponsiveAppBar from './Components/ResponsiveAppBar';
import  Home  from './Components/Home';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Documents from './Components/Documents';

function App() {
  return (
    <div className="App">
      
      <Router>
      <ResponsiveAppBar className="navbar"/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/experience' element={<Experience></Experience>}></Route>
          <Route path='/resume' element={<Projects></Projects>}></Route>
          <Route path='/Documents' element={<Documents></Documents>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
