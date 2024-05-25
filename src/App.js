import logo from './logo.svg';
import './App.css';
// import Login from './pages/user/login/Login';
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import CardProductHome from './components/CardproductHome/CardProductHome';
import Register from './pages/user/Register/Register';
import Login from './pages/user/login/Login';
import Footer from './components/Footer/Footer';
import Navbar1 from './components/navbar/Navbar1';
import Home from './components/Home/Home';
import CardProduct from './components/Cardproduct/CardProduct';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import { Nav } from 'react-bootstrap';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Payment from './components/Paymet/Paymet';
import PaymentSuccess from './components/Paymentsuccess/PaymentSuccess';
import Search from './components/Search/Search';
import Admin from './pages/admin/Admin';






function App() {
  
  
  return (


    <div >
    
    <Router > 
       
   
          <Routes>

         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
        
         <Route path='/testimonial' element={<Testimonial/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/cardproduct' element={<CardProduct/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
         <Route path='/search' element={<Search/>}/>
         <Route path='/admin' element={<Admin/>}/> 
         


         </Routes>  

   
         
    </Router>
   
    </div>
  );
}

export default App;
