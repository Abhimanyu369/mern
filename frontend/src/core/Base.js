import React from 'react';
import Menu from './Menu';

const Base = ({children}) => {
    return ( 
        <div className="bg-dark">
            <Menu/>
            <hr className="border-light" />
            <div className="py-5">
                {children}
            </div>
            <hr className="border-light" />
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid text-center">
                    <p className="text-light">If you got any question, feel free to reach out!</p>
                    <button className="btn btn-warning">Contact Us</button>
                </div>
                <div className="container text-center">
                    <span className="text-muted">MERN Stack</span>
                </div>
            </footer>   
        </div>
    );
}
 
export default Base;