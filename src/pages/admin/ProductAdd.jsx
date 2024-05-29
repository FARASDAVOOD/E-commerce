import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './adminNav/AdminNav';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Productadd() {
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discount,setDis]=useState("");
    const [rating,setRate]=useState("")

    const navigate = useNavigate();

    const productreg = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/product", { category, image, name, description, price,discount,rating })
            .then(res => {
                toast.success("Product Added Successfully");
                setname("");
                setimage("");
                setcategory(""); // Reset category to initial value
                setDescription("");
                setPrice("");
                setDis("");
                setRate("");
            })
            .catch(err => console.error(err));
    }

    return (
        <>
        <AdminNav/>
            <div data-theme="light" className='h-screen'>
                <h1 className='text-3xl font-bold'>PRODUCT ADDING</h1>
                <form className='w-full flex flex-col items-center' onSubmit={productreg}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Name</span>
                        </div>
                        <input required type="text" placeholder="Product Name" value={name} className="input input-bordered w-full max-w-xs" onChange={e => setname(e.target.value)} />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Image</span>
                        </div>
                        <input required type="text" value={image} placeholder="Product URL" className="input input-bordered w-full max-w-xs" onChange={e => setimage(e.target.value)} />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select Product Category</span>
                        </div>
                        <select className="input input-bordered select select-bordered select-sm w-full max-w-xs" value={category} onChange={e => setcategory(e.target.value)}>
                            <option value="">Select category</option>
                            <option value="cloth">Cloth</option>
                            <option value="cream">Cream</option>
                            <option value="bed">Bed</option>
                            <option value="product">Product</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Description</span>
                        </div>
                        <input required type="text" value={description} placeholder="Product Description" className="input input-bordered w-full max-w-xs" onChange={e => setDescription(e.target.value)} />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Product Price</span>
                        </div>
                        <input required type="text" value={price} placeholder="Product Price" className="input input-bordered w-full max-w-xs" onChange={e => setPrice(e.target.value)} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Discount</span>
                        </div>
                        <input required type="text" value={discount} placeholder="Product Discount" className="input input-bordered w-full max-w-xs" onChange={e => setDis(e.target.value)} />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Rating out of 5</span>
                        </div>
                        <input required type="text" value={rating} placeholder="Product Rating" className="input input-bordered w-full max-w-xs" onChange={e => setRate(e.target.value)} />
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
                <button type="submit" className="btn  m-4" onClick={() => navigate('propage')}>Go to product page</button>
                <button type="submit" className="btn  m-4" onClick={() => navigate('userpage')}>Go to User page</button>
            </div>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        </>
    )
}

export default Productadd;
