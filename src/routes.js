import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
// import Container from './Components/Container/Container';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';


export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/products' component={Products}/>
    <Route path='/login' component={Login}/>
    <Route path='/cart' component={Cart}/>

</Switch>
)