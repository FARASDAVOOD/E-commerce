import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../pages/context/ContextApi';
import axios from 'axios';

const Payment = () => {
    const navigate = useNavigate();
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [security, setSecurity] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    const [registerValue, setRegisterValue, Users, setUsers, cart, setCart, logValue, setLogValue] = useContext(mainContext);

    const userId = Users.id;

    const clearCartInBackend = () => {
        axios.patch(`http://localhost:3000/user/${userId}`, { cart: [] })
            .then(response => {
                console.log('Cart cleared in backend:', response.data);
                setCart([]);
            })
            .catch(error => {
                console.error('Error clearing cart in backend:', error);
            });
    };

    const handlePay = () => {
        if (isFormValid()) {
            clearCartInBackend();
            navigate('/paymentsuccess');
        } else {
            alert("Please fill all fields properly.");
        }
    };

    const isFormValid = () => {
        return cardHolder.trim() !== '' && cardNumber.length >= 14 && security.length === 3 && expiryMonth !== '' && expiryYear !== '';
    };

    return (
        <div className="bg-blue-50 m-4">
            <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                <header className="flex flex-col justify-center items-center">
                    <div className="relative">
                        <img className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" alt="front credit card" />
                        <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                            {/* <p className="number mb-5 sm:text-xl">{cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'}</p> */}
                            <div className="flex flex-row justify-between">
                                {/* <p>{cardHolder !== '' ? cardHolder : 'Card holder'}</p> */}
                                <div className="">
                                    {/* <span>{expiryMonth !== '' ? expiryMonth : 'MM'}</span>
                                    <span>/</span>
                                    <span>{expiryYear !== '' ? expiryYear : 'YY'}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex">
                        <li className="mx-2">
                            <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
                        </li>
                        <li className="mx-2">
                            <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
                        </li>
                        <li className="ml-5">
                            <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
                        </li>
                    </ul>
                </header>
                <main className="mt-4 p-4">
                    <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
                    <div className="">
                        <div className="my-3">
                            <input
                                type="text"
                                onChange={(e) => setCardHolder(e.target.value)}
                                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="Card holder"
                                maxLength="22"
                            />
                        </div>
                        <div className="my-3">
                            <input
                                type="text"
                                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                placeholder="Card number"
                                onChange={(e) => setCardNumber(e.target.value)}
                                maxLength="19"
                            />
                        </div>
                        <div className="my-3 flex flex-col">
                            <div className="mb-2">
                                <label className="text-gray-700">Expired</label>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <select 
                                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                    value={expiryMonth}
                                    onChange={(e) => setExpiryMonth(e.target.value)}
                                >
                                    <option value="" disabled>MM</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select 
                                    className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                    value={expiryYear}
                                    onChange={(e) => setExpiryYear(e.target.value)}
                                >
                                    <option value="" disabled>YY</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                </select>
                                <input
                                    type="text"
                                    className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                    placeholder="Security code"
                                    onChange={(e) => setSecurity(e.target.value)}
                                    maxLength="3"
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="mt-6 p-4">
                    <button 
                        onClick={handlePay}
                        className={`submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors ${!isFormValid() && 'cursor-not-allowed'}`}
                    >
                        Pay now
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Payment;
