import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from '../adminNav/AdminNav';

function Userpage() {
    const [usrds, setUsrds] = useState([]);
    let count = 0;

    useEffect(() => {
        fetch("http://localhost:3000/user")
            .then(res => res.json())
            .then(res => setUsrds(res))
            .catch(err => console.error('Error fetching users:', err));
    }, []); // Add an empty dependency array to ensure this runs only once after component mounts

    const handleBlock = (value) => {
        const updatedUser = { ...value, block: !value.block };

        axios.put(`http://localhost:3000/user/${value.id}`, updatedUser)
            .then(response => {
                setUsrds(prevState => prevState.map(user => user.id === value.id ? updatedUser : user));
            })
            .catch(err => console.error('Error updating user:', err));
    };

    return (
        <>
            <AdminNav />

            <div data-theme="light" className="h-screen overflow-scroll">
                <table className="table table-zebra">
                    <thead>
                        <tr className='text-xl'>
                            <th className='text-center'>#</th >
                            <th className='text-center'>Name</th >
                            <th className='text-center'>E-mail</th >
                            <th className='text-center'>Total Number of Bought Items</th>
                            <th className='text-center'>Bought Items</th >
                            <th className='text-center'>Action</th >
                        </tr>
                    </thead>
                    <tbody>
                        {usrds && usrds.map(value => {
                            count += 1;
                            return (
                                <tr key={value.id}>
                                    <th className='text-center'>{count}</th >
                                    <td className='text-center'>{value.name}</td >
                                    <td className='text-center'>{value.email}</td >
                                    <td className='text-center'>{value.bought ? value.bought.length : 0}</td > {/* Number of bought items */}
                                    <td className='text-center'>
                                        {value.bought && value.bought.length > 0 ? (
                                            <ul>
                                                {value.bought.map((item, index) => (
                                                    <li key={index}>{item.name}-({item.quantity})</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No items bought</p>
                                        )}
                                    </td >
                                    <td className='text-center'>
                                        {value.block ? (
                                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => handleBlock(value)}>Unblock</button>
                                        ) : (
                                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => handleBlock(value)}>Block</button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Userpage;
