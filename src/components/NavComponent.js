import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Login from './Login';

import ContactUs from './Contactus';
import CreateProduct from './CreateProduct';
import ProductList from './ProductList';
import Viewallcust from './Viewallcust';
import CreateUser from './CreateUser';
import ViewProduct from './ViewProduct';


class NavComponent extends Component {
    render() {
        return (
            <BrowserRouter>

                <div id="links" className='container'><ul className='d-flex justify-content-around'><Link to="/" style={{color:'white'}}>Home</Link>
                    <Link to="/login" style={{color:'white'}}>Login</Link>
                    <Link to="/view" style={{color:'white'}}>Viewall</Link>
                    <Link to="/contactus" style={{color:'white'}}>ContactUs</Link>
                    <Link to="/createuser" style={{color:'white'}}>Register</Link>
                    <Link to="/aboutus" style={{color:'white'}}>AboutUs</Link>
                    <Link to="/logout" style={{color:'white'}}>Logout</Link>
                    </ul>
                </div>
                <Routes>

                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/createuser" element={<CreateUser/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                    <Route path="/view" element={<Viewallcust/>}/>
                    <Route path="/addproduct" element={<CreateProduct/>}/>
                    <Route path="/viewall" element={<ProductList/>}/>
                    <Route path={`view-product:id`} element={<ViewProduct/>}/>
                    </Routes>
            </BrowserRouter >
        );
    }
}
export default NavComponent;