import React from 'react'
import { useNavigate } from 'react-router-dom'



function AdminNav() {
    const navigate = useNavigate()
    return (
      
            <div className="navbar  w-full flex items-center">
{/*                
                <div className="flex items-center gap-2">
                    <div className="dropdown"> */}
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"> */}
                            {/* You can add an avatar or icon here */}
                        {/* </div> */}
                      
                        <ul tabIndex={0} className="z-[1] p-2 shadow menu menu-sm w-full dropdown-content rounded-box flex justify-evenly items-center space-x-4">
                         
                            <li><a onClick={() => navigate('/admin/userpage')}>User Detail's</a></li>
                            <li><a onClick={() => navigate('/admin')}>Add Product</a></li>
                            <li><a onClick={() => navigate('/admin/propage')}>Product Details</a></li>
                            <li>
                                <a onClick={() => {
                                    navigate('/')
                                   
                                }}>Logout</a>
                            </li>
                        </ul>
                    </div>
            //     </div>
            // </div>
       
    )
}

export default AdminNav;




