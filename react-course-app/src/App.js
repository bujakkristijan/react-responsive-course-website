import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import HomeComponent from './components/home/HomeComponent';

function App() {
  return (
    
    <Router>
    <div className="App">
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/home' element={<HomeComponent/>}></Route>
    </Routes>
      
    </div>
    </Router>
  );
}

export default App;
