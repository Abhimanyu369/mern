import React from 'react';
import Menu from './Menu'

const Base = ({children}) => {
    return ( 
        <div>
            <Menu/>
            {children}
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid">
                    Some Text
                    <button className="btn btn-warning">Contact Us</button>
                </div>
                <div className="container">
                    <span className="text-muted">Some text</span>
                </div>
            </footer>   
        </div>
    );
}
 
export default Base;