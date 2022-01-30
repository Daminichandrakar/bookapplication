import React, { useState } from "react";
import UserService from "../../service/UserService";

const Sign = (props) => {
 
    const [ user , setUser] = useState({
        emailId: "",
        password: ""
    });

   const {emailId,password} = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit =  e => {
        e.preventDefault();
        // Axios.post("http://localhost:8080/signup", user);
        UserService.addEmployee(user).then(res => {
            console.log(res);
            console.log("data is  ", res.data.token);
            localStorage.setItem("id",res.data.token);
           props.history.push("/BookStoreFronPage")
        })
        console.log("added successfully");
        // history.push("/");
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
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>

  );
}

export default Sign;