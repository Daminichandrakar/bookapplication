import React, { useState } from "react";
import "../signup/si.css";
import home from "../../asserts/logup/home.png";
import TextField from "@material-ui/core/TextField";
import UserService from "../../service/UserService";
import Axios from "axios";

const Si = (props) => {

    
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
        props.history.push("/");
      };

      const changeBox =  e => {
        props.history.push("/")
      }; 

      const changeBoxAgain =  e => {
       props.history.push("/si")
      }; 

  return (
    <div className="label">
      <div className="label1">
        <div>
          <img className="image1" src={home} alt="home" />
          <h4 className="content1">Online Book Shopping</h4>
        </div>
      </div>
      <div className="label2">
        <div className="box22">
          <div className="rowA">
            <h3 style={{ cursor: "pointer" }} onClick={changeBox}>
              LOGIN
            </h3>
            <h3 style={{ cursor: "pointer" }} onClick={changeBoxAgain}>
              SIGNUP
            </h3>
          </div>
          <div className="rowB">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={fullName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="rowC">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              name="emailId"
              value={emailId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="rowD">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-password-input"
              label="Password"
              type={"password"}
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="rowE">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="rowF">
            <button
              style={{ width: "100%", height: "100%" }}
              onClick={e => onSubmit(e)}
              className="button1"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Si;