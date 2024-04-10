import React, { useContext, useRef, useState} from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

        const [menu,setMenu] = useState("shop");
        const {getTotalCartItems}=useContext(ShopContext);
        const menuRef = useRef();

        const dropdown_toggle = (e) =>{
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick = {dropdown_toggle} src = {nav_dropdown} alt = "" />
            <ul rel = {menuRef} className='nav-menu'>
                <li OnClick={()=>{setMenu("shop")}}><link style={{ textDecoration: 'none' }} to='/'>Shop</link>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li OnClick={()=>{setMenu("mens")}}><link style={{ textDecoration: 'none' }} to='/mens'>Men</link>Men{menu==="mens"?<hr/>:<></>}</li>
                <li OnClick={()=>{setMenu("womens")}}><link style={{ textDecoration: 'none' }} to='/womens'>Women</link>Women{menu==="womens"?<hr/>:<></>}</li>
                <li OnClick={()=>{setMenu("kids")}}><link style={{ textDecoration: 'none' }} to='/kids'>Kids</link>Kids{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <link to='/login'><button>Login</button></link> 
                <link to='/cart'><img src={cart_icon} alt="" /></link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar