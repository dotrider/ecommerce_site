import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import './Nav.scss';


const Nav = (props) => {

    return(
        <section className='nav'>
            <div id='logo'>
                <h1 onClick={() => props.history.push('/')} >STORE NAME</h1>
            </div>
            <nav className='nav-menu'>
           <Link to='/products'><span className='menu'>Products</span></Link>
           <Link to='/login'><span className='menu'>Login</span></Link>
           <Link to='/cart'><span className='menu'>Cart</span></Link>
           </nav>
        </section>
    )
}

export default withRouter(Nav);