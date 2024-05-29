import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './adminNav/AdminNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Propage() {

    const navigate = useNavigate()

    const [propage, setpropage] = useState("");
    const [pdct, setpdct] = useState("cloth")

    useEffect(() => {
        fetch("http://localhost:3000/product")
            .then(res => res.json())
            .then(response => setpropage(response.filter(value => value.category == pdct)))
    }, [pdct])

    const deletepro = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            const upd = propage.filter(value => value.id != id)
            setpropage(upd)
            axios.delete(`http://localhost:3000/product/${id}`)
                .then(res => {
                    toast.success("Product deleted")
                })
        }
    }

    return (
        <>
            <AdminNav/>


            <div className="w-full flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("cloth")}>cloth</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("cream")}>cream</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("bed")}>bed</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
                    <div className="btn btn-ghost w-full h-full" onClick={() => setpdct("product")}>product</div>
                </div>
            </div>
            <div data-theme="light" className='h-screen overflow-scroll flex flex-wrap justify-evenly'>
                <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <table className="table table-xs w-full">
                        <thead>
                            <tr className='text-xl'>
                                <th className="px-4 py-2">Qty</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Product name</th>
                                <th className="px-4 py-2">Details</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {propage && propage.map((item, index) => {
                                return (
                                    <tr key={item.id} className="border-b border-gray-200">
                                        <th className="px-4 py-2">{index + 1}</th>
                                        <td className="px-4 py-2"><img src={item.image} className="w-20 h-20 object-cover"/></td>
                                        <td className="px-4 py-2">{item.name}</td>
                                        <td className="px-4 py-2">{item.description}</td>
                                        <td className='px-4 py-2 font-bold'>₹{item.price}</td>
                                        <div className='px-4 py-2 flex items-center'>
                                            <button className='btn btn-error mr-3' onClick={e => deletepro(item.id)}>Delete</button>
                                            <button className='btn btn-outline btn-warning' onClick={() => navigate(`productedit/${item.id}`)}>Edit</button>
                                        
                                        </div>
                                    </tr>


                                )
                            })}
                        </tbody>
                    </table>
                </div>
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

export default Propage;