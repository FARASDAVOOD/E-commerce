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

import Detailspage from './components/Detailspage/Detailspage';
import AdminNav from './pages/admin/adminNav/AdminNav';
import Adminhome from './pages/admin/adminhome/AdminHome';
import Propage from './pages/admin/Propage';
import Userpage from './pages/admin/UserPages/UserPages';
import ProductEdit from './pages/admin/ProductEdit';







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
         <Route path='/admin' element={<Adminhome/>}/> 
         <Route path='/detailspage/:userid' element={<Detailspage/>}></Route> 
          <Route path='/admin' element={<Adminhome/>}/>
          <Route path='admin/propage' element={<Propage/>}></Route>
                    <Route path='admin/userpage' element={<Userpage/>}></Route>
                    <Route path='admin/propage/productedit/:userid' element={<ProductEdit />}></Route>
        
         </Routes>  

   
         
    </Router>
   
    </div>
  );
}

export default App;
