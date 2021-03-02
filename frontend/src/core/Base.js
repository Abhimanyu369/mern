import React from 'react';
const Base = ({children}) => {
    return ( 
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">My Title</h2>
                    <p className="lead">My Description</p>
                </div>
                <p>{children}</p>
            </div>
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