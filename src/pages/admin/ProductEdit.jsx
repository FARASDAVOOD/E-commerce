import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNav from './adminNav/AdminNav';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductEdit() {
    const navigate = useNavigate();
    const { userid } = useParams();

    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/product/${userid}`)
            .then(res => res.json())
            .then(res => {
                setname(res.name)
                setimage(res.image)
                setcategory(res.Category)
                setDescription(res.description)
                setPrice(res.price)
            })

    }, [])

    const handleedit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3000/product/${userid}`, { category, image, name, description, price })
            .then(res => toast.success("Edit Successfully"))
            navigate('/admin/propage')
    }


    return (
        <div>
           <AdminNav/>


            <div data-theme="light" className='h-screen '>
                <h1 className='text-3xl font-bold'>Product Editing</h1>
                <form className='w-full flex flex-col items-center' onSubmit={handleedit}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Name</span>
                        </div>
                        <input required type="text" value={name}  className="input input-bordered w-full max-w-xs"  onChange={e => setname(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product image</span>
                        </div>
                        <input required type="text" placeholder="Product URL" className="input input-bordered w-full max-w-xs" value={image} onChange={e => setimage(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Select product Category</span>
                        </div>
                        <select className=" input input-bordered select select-bordered select-sm w-full max-w-xs" value={category} onChange={e => setcategory(e.target.value)}>
                            <option>Select category</option>
                            <option value="Cat">cloth</option>
                            <option value="Dog">cream</option>
                            <option value="Birds">bed</option>
                            <option value="fish">product</option>
                        </select>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Description</span>
                        </div>
                        <input required type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" value={description} onChange={e => setDescription(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Edit Product Price</span>
                        </div>
                        <input required type="text" placeholder="Product Price" className="input input-bordered w-full max-w-xs" value={price} onChange={e => setPrice(e.target.value)} />
                        <div className="label">
                        </div>
                    </label>
                    <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>
            </div >
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
        </div>
    )
}

export default ProductEdit