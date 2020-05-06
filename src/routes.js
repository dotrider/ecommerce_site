import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import Account from './Components/Account/Account';


export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/account' component={Account}/>

</Switch>
)