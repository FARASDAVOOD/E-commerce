import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mainContext } from '../../pages/context/ContextApi';
import axios from 'axios';
import Navbar1 from '../navbar/Navbar1';

function Detailspage() {
    const [registerValue,setRegisterValue,Users,setUsers,cart,setCart,logValue,setLogValue,search,setSearch,findData,setFindData]=useContext(mainContext)
    const userId = Users.id;
    const { userid } = useParams();
    const [product, setProduct] = useState([]);
    const [user, setuser] = useState([])
    const [qty, setqty] = useState(1)


    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/product/${userid}`)
            .then(res => res.json())
            .then(res => setProduct(res))

    }, []);
console.log(product,"product");
    const handleCart = (id) => {




        const findProduct = product;
    
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...findProduct, quantity: 1 }];
          }
        });
    
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
    
        const updatedUser = {
          cart: updatedCart.length > 0 ? updatedCart : [...cart, { ...findProduct, quantity: 1 }]
        };
    
        axios.patch(`http://localhost:3000/user/${userId}`, updatedUser)
          .then(response => {
            console.log('User cart updated:', response.data);
          })
          .catch(error => {
            console.error('Error updating user cart:', error);
          });
      };
    
    return (
        <div>
            <Navbar1/>
            <div  className=" mt-24 mx-10 relative flex flex-col justify-center place-items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 items-center justify-center overflow-hidden rounded-xl" href="#">
              <img className="object-contain h-full" src={product.image} alt="product image" onClick={()=>navigate(`/detailspage/${product.id}`)} />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {product.discount}% OFF
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">₹{product.price}</span>
                  <span className="text-sm text-slate-900 line-through">699</span>
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      aria-hidden="true"
                      className={`h-5 w-5 ${i < product.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}.0</span>
                </div>
              </div>
              <button
                onClick={() => handleCart(product.id)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>

    )
}

export default Detailspage;