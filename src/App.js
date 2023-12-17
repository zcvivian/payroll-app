import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/> 
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
