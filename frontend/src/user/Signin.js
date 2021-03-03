import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom'

const Signin = () => {
    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" name="" id=""/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" name="" id=""/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return ( 
        <Base>
            <h1 className="text-center text-light mb-5">Sign In</h1>
            {signInForm()}
        </Base>  
     );
}
 
export default Signin;