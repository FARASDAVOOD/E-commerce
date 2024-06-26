import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../pages/context/ContextApi";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Cart = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const navigate = useNavigate();
  const [registerValue, setRegisterValue, Users, setUsers, cart, setCart, logValue, setLogValue, addToCart] = useContext(mainContext);

  const userId = Users.id;

  const updateCartInBackend = (updatedCart) => {
    axios.patch(`http://localhost:3000/user/${userId}`, { cart: updatedCart })
      .then(response => {
        console.log('Cart updated in backend:', response.data);
      })
      .catch(error => {
        console.error('Error updating cart in backend:', error);
      });
  };

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + increment) } : item
    );
    setCart(updatedCart);
    updateCartInBackend(updatedCart);
  };

  const handleRemoveItem = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    updateCartInBackend(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 20; 
  const total = subtotal + shipping;

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.length !== 0 ? (
            cart.map(item => (
              <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={item.image} alt="product" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                    <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{item.price.toLocaleString()} ₹</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700">Your cart is empty</div>
          )}
        </div>
        
        <div className="mt-6 h-full rounded-lg border p-5 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{subtotal} ₹</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{shipping} ₹</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">{total} ₹</p>
              <p className="text-sm text-gray-700">including GST</p>
            </div>
          </div>
          <button
            onClick={() => (cart.length !== 0 && logValue.email.trim() !== '' ) ? navigate('/payment') : navigate("/login") }
            className={`mt-6 w-full rounded-md py-1.5 font-medium text-blue-50 hover:bg-blue-600 ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
            disabled={cart.length === 0}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
