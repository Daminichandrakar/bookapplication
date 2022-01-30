import React, { useState } from "react";
import Axios from "axios";

const Log = () => {
 
    const [ user , setUser] = useState({
        fullName: "",
        emailId: "",
        password: "",
        phoneNumber:""
    });

   const {fullName , emailId,password,phoneNumber } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit =  e => {
        e.preventDefault();
        Axios.post("http://localhost:8080/signup", user);
        console.log("added successfully");
       this.props.history.push("/");
      };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="fullName"
              value={fullName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your email"
              name="emailId"
              value={emailId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>

  );
}

export default Log;