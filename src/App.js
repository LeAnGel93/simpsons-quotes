import logo from './logo.svg';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import HomePage from './pages/Home/HomePage';
import SimpsonsPage from './pages/Simpsons/SimpsonsPage';
import Header from './shared/components/Header/Header';
import FormularyPage from './pages/Formulary/FormularyPage';

function App() {
  return ( 
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}/>
      <Route path="/simpsons" element={<SimpsonsPage></SimpsonsPage>} />
      <Route path="/formulary" element={<FormularyPage></FormularyPage>}/>
    </Routes>
    
    </Router>
  );
  
}

export default App;
