import React from 'react'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'


import ProductEdit from '../ProductEdit'
import Propages from '../Propage'
import ProductAdd from '../ProductAdd'
import Userpages from '../UserPages/UserPages'

function Adminhome() {
    return (
        <div>
      
                <Routes>
                    
                  
                    <Route path='/' element={<ProductAdd/>}></Route>
                    <Route path='/propage' element={<Propages/>}></Route>
                    <Route path='/userpage' element={<Userpages/>}></Route>
                    <Route path='propage/productedit/:userid' element={<ProductEdit />}></Route>
                </Routes> 
            
        
                </div>
       
    )
}

export default Adminhome