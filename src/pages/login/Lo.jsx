import React, { useState } from "react";
import "../login/Lo.css";
import home from "../../asserts/logup/home.png";
import TextField from "@material-ui/core/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import UserService from "../../service/UserService";

const Lo = (props) => {

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [ user , setUser] = useState({
        emailId: "",
        password: ""
    });

   const {emailId,password} = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handlePasswordToggle = () => {
        setPasswordVisibility(!passwordVisibility);
      };

    const onSubmit =  e => {
        e.preventDefault();
        // Axios.post("http://localhost:8080/signup", user);
        UserService.addEmployee(user).then(res => {
            console.log(res);
            console.log("data is  ", res.data.token);
            localStorage.setItem("id",res.data.token);
            localStorage.setItem("emailId",emailId);
            localStorage.setItem("password",password);
           props.history.push("/BookStoreFronPage")
        })
        console.log("added successfully");
        // history.push("/");
      };


      const changeBox =  e => {
        props.history.push("/")
      }; 

      const changeBoxAgain =  e => {
        props.history.push("/si")
      }; 

  return (
    <div className="box">
      <div className="box1">
        <div>
          <img className="image" src={home} alt="home" />
          <h4 className="content">Online Book Shopping</h4>
        </div>
      </div>
      <div className="box2">
        <div className="box21">
          <div className="row1">
          <h3 style={{ cursor: "pointer" }} onClick={changeBox}>
              LOGIN
            </h3>
            <h3 style={{ cursor: "pointer" }} onClick={changeBoxAgain}>
              SIGNUP
            </h3>
          </div> 
          <div className="row2">
            <TextField
              className="emailFeild"
              style={{ width: "100%", height: "100%" }}
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              name="emailId"
              value={emailId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="row3">
            <TextField
              style={{ width: "100%", height: "100%" }}
              id="outlined-password-input"
              label="Password"
              type={passwordVisibility ? "text" : "password"}
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
            {passwordVisibility ? (
              <Visibility
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon1"
              />
            ) : (
              <VisibilityOff
                onClick={handlePasswordToggle}
                className="VisibilityOffOutlinedIcon1"
              />
            )}
          </div>
          <div className="row4">
            <button
              style={{ width: "100%", height: "100%" }}
              className="button"
              onClick={e => onSubmit(e)}
               >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lo;
