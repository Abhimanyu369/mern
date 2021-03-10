import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import {createCategory} from "./helper/adminapicall"

const Addcategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {user, token} = isAuthenticated();
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">Home</Link>
    </div>
  )

  const handleChange = (e) => {
    setError("")
    setName(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setError("")
    setSuccess(false)

    // backend request fired
    createCategory(user._id, token, {name})
    .then(data=>{
      if(data.error){
        setError(true)
      } else {
        setError("")
        setSuccess(true)
      }
    })
  }

  const successMessage = () => {
    if(success) {
      return <h4 className="text-success">Category Created Successfully!</h4>
    }
  }
  const errorMessage = () => {
    if(error) {
      return <h4 className="text-danger">Failed to Category Created!</h4>
    }
  }
  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead">Enter the Category</p>
          <input 
            type="text"
            className="form-control my-3"
            autoFocus
            required
            placeholder="e.g.: Summer"
            onChange={handleChange}
            value={name}
          />
          <button onClick={onSubmit} className="btn btn-outline-info">Create Category</button>
        </div>
      </form>
    )
  }
  return (
    <Base>
      <div className="container bg-info p-4">
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {successMessage()}
            {errorMessage()}
            {myCategoryForm()}
            {goBack()}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Addcategory;
