import { useState, useEffect } from 'react';
import "./SignUp.css";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function SignUp() {
  const [mobile, setMobile] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg !== "") {
      const timeout = setTimeout(() => setMsg(""), 15000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "mobile":
        setError("");
        setMobile(e.target.value);
        if (e.target.value === "") {
          setError("Mobile number cannot be empty");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password cannot be empty");
        }
        break;
      case "confirm_pass":
        setError("");
        setConfirmPass(e.target.value);
        if (e.target.value === "") {
          setError("Confirm Password cannot be empty");
        } else if (e.target.value !== pass) {
          setError("Passwords do not match!");
        }
        break;
      default:
        break;
    }
  };

  const checkPassword = () => {
    if (pass.length < 8) {
      setError("Password must be at least 8 characters long");
    }
    else if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter");
    }
    else if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter");
    }
    else if (!/[0-9]/.test(pass)) {
      setError("Password must contain at least one number");
    }
    else if (!/[@$!%*?&]/.test(pass)) {
      setError("Password must contain at least one special character");
    }
    else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile && pass && confirm_pass && pass === confirm_pass) {
      const url = "http://localhost/react/register.php";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
      const Data = { mobile, pass };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          setError(response.error);
        } else {
          setMsg(response.result);
        }
      })
      .catch(err => {
        setError(err.message);
        console.error(err);
      });

      setMobile("");
      setPass("");
      setConfirmPass("");
    } else {
      setError("All fields are required and passwords must match");
    }
  };

  const checkMobile = () => {
    if (mobile && pass && confirm_pass) {
      const url = "http://localhost/react/checkmobile.php";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
      const Data = { mobile };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then(response => response.json())
      .then(response => setError(response[0].result))
      .catch(err => {
        setError(err.message);
        console.error(err);
      });
    }
  };

  return (
    <>
      <div className='room'>
        <form className='form'>
          <p>
            {msg !== "" ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
          </p>
          <p className='label'>Phone number</p>
          <input
            type="text"
            placeholder="phone number"
            className='input'
            name="mobile"
            value={mobile}
            onChange={(e) => handleInputChange(e, "mobile")}
            onBlur={checkMobile} />
          <p className='label'>Password</p>
          <input
            type="password"
            placeholder="password"
            className='input'
            name="password"
            value={pass}
            onChange={(e) => handleInputChange(e, "pass")}
            onBlur={checkPassword} />
          <p className='label'>Confirm Password</p>
          <input
            type="password"
            placeholder="confirm password"
            className='input'
            name="confirm_pass"
            value={confirm_pass}
            onChange={(e) => handleInputChange(e, "confirm_pass")} />
          <button
            type="submit"
            className='Submit'
            onClick={handleSubmit}>Sign Up</button>
          <br />
          <Link to="/sign-in" className='account'>
            I already have an account
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;