import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeft = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link text-info" to="/admin/create/category">Create Categories</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link text-info" to="/admin/create/product">Create Products</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link text-info" to="/admin/products">Manage Products</Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link text-info" to="/admin/orders">Create Orders</Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminRight = () => {
    return(
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name: </span>{name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email: </span>{email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Admin Area</span>
          </li>
        </ul>
      </div>
    )
  };

  return (
    <Base>
      <div className="row bg-info p-4">
        <div className="col-md-3">{adminLeft()}</div>
        <div className="col-md-9">{adminRight()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
