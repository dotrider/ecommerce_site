import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';


const Nav = () => {

    return(
        <section className='nav'>
           <nav className='nav-menu'>
                <Link to='/products'><span className='menu'>Products</span></Link>
                <Link to='/login'><span className='menu'>Login</span></Link>
                <Link to='/cart'><span className='menu'>Cart</span></Link>
           </nav>
        </section>
    )
}

export default Nav;