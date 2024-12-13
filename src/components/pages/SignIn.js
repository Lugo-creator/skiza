import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const naviget = useNavigate();
  const [mobile, setMobile] = useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => { 
    let login = localStorage.getItem("login");
    if (login) {
      naviget("/");
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () { 
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg, naviget]);

  const handleInputChange = (e, type) => { 
    switch(type) {
      case "mobile":
        setError("");
        setMobile(e.target.value);
        if (e.target.value===""){
            setError("Username cannot be empty");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value===""){
            setError("Password cannot be empty");
        }
        break;
      default:
        break;
    }
  }

  function loginSubmit(e) { 
    e.preventDefault();
    if (mobile !== "" && pass !== "") {
      var url = "http://localhost/react/login.php";
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
      var Data = {
        mobile: mobile,
        pass: pass
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
      }).then((response) => response.json())
        .then((response) => {
          if(response[0].result === "Invalid Mobile Number" || response[0].result === "Incorrect Password") {
            setError(response[0].result);
          }
          else {
            setMsg(response[0].result);
            setTimeout(function () {
              localStorage.setItem("login", true);
              naviget("/");
            }, 5000);
          }
        }).catch((err) => { 
          setError(err.message);
          console.log(err);
        })
    } else {
      setError("All fields are required");
    }
    e.preventDefault();
  }
  return (
        <>
    <div className='room'>
      <form className='form'>
        <p>
          {
              error !== "" ?
                <span className='error'>{error}</span> :
                <span  className='success'>{msg}</span>  
          }    
        </p>
        <p className='label'>Phone number</p>
          <input
            type="text"
            placeholder="mobile number"
            className='input'
            value={mobile}
            onChange={(e) => handleInputChange(e, "mobile")}
            required />
        <p className='label'>Password</p>
          <input
            type="password"
            placeholder="password"
            className='input'
            value={pass}
            onChange={(e) => handleInputChange(e, "password")}
            required />
          <br />
          <input type="submit" className='Submit' onClick={loginSubmit}/>
          <br />
        <Link to="/sign-up" className='account'>
          I don't have an account
        </Link>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default SignIn
