import React,{useState,useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'; 
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
const Navbar = () => {
            const [menu,setMenu]=useState("shop");
            const menuRef=useRef();
            const dropdown_toggle=(e)=>{
                 menuRef.current.classList.toggle('nav-menu-visible');
                 e.target.classList.toggle('open');
            }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p> Shopper</p>
      </div>
      <img  className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul  ref={menuRef} className='nav-menu'>
        <li onClick={()=> { setMenu ("shop") } }> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu=="shop"?<hr />:<></>}</li>
        <li onClick={()=>{ setMenu("mens")   }}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu=="mens"?<hr />:<></>}</li>
        <li onClick={()=>{ setMenu("women") }}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu=="women"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}> <Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu=="kids"?<hr />:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'> <button>Login</button> </Link>
        <Link to='/cart'><img src={cart_icon} alt="" /> </Link>
        <div className="nav-cart-count"></div>
      </div>

    </div>
  )
}

export default Navbar
