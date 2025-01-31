import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] =useState("menu");
    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
            <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact-Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
                <Link to='/Cart'><img  src={assets.basket_icon} alt=""/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign-in</button>
        </div>
    </div>
  )
}

export default Navbar
