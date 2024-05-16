import logo from './logo.svg';
import './App.css';
import Login from './pages/user/login/Login';
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import Register from './pages/user/Register/Register';




function App() {
  
  
  return (
    <>
    <Router>
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>



        </Routes>



    </Router>

   
    </>
  );
}

export default App;
