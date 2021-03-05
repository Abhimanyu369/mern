import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./core/Home"
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import Userdashboard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory'

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={Userdashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
                <AdminRoute path="/admin/create/category" exact component={AddCategory} />
            </Switch>
        </Router>
     );
}
 
export default Routes;