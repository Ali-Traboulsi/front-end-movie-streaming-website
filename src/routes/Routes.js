import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect, useHistory
} from 'react-router-dom';
import Home from '../components/home/home';

// import './App.css';
import SignIn from '../components/admin/pages/SignIn';
import Dashboard from '../components/admin/pages/Dashboard';
import AddDataForm from '../components/admin/admin-components/AddDataForm';
import {adminLogin} from "../components/admin/api";
import Admin from '../components/admin/admin-components/Admin';


const authRouth = (Component) => () => {
    // const response = await adminLogin(data);

    if (localStorage.getItem('access_token')) {
        return <Component />
    } else {
        return <Redirect to='/login' />
    }
}

function Routes(props) {

    return (
        <Router {...props}>
            <Switch>
                <Route path='/login' component={SignIn}/>
                {/*<Route exact path="/">*/}
                {/*    <Redirect to="/home" />*/}
                {/*</Route>*/}
                <Route path='/home' component={Home}/>
                <Route path='/dashboard' component={authRouth(Dashboard)} />
                <Route path='/dataupload' component={authRouth(AddDataForm)} />
                <Route path='/admin' component={authRouth(Admin)}/>
            </Switch>
        </Router>
    );
}

export default Routes;
