import React, {useState} from "react";
import Base from "../core/Base";
import {isAuthenticated} from '../auth/helper/index'
import { Link } from "react-router-dom";

const Addcategory = () => {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
  return (
    <Base>
      <div className="container bg-info p-4">
        <div className="row bg-white rounded">
            <div className="col-md-8 offset-md-2">
                <h1>Hello There</h1>
            </div>
        </div>
      </div>
    </Base>
  );
};

export default Addcategory;
