import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import Lendsqr from "../../assets/images/lendsqr.svg"
import { useEffect, useState } from "react";

const Login: React.FunctionComponent = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(email !== '' && password !== '' && emailError === '' && passwordError === '');
  }, [email, password, emailError, passwordError]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = event.target.value;
    setEmail(value);
    if (value === '') {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const value = event.target.value;
    setPassword(value);
    if (value === '') {
      setPasswordError('Password is required');
    } else if (!passwordRegex.test(value)) {
      setPasswordError('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/users');
    };
    
  return (
      <div className="row mx-0 login-page">
          <div className="col-lg-6 left-section">
              <div>   
              <img src={Lendsqr} alt="brand-logo"/>
              </div>
              <div className="left-section-main ">
                  <div className="mask">
                  </div>
              </div>
          </div>
          <div className="col-lg-6 right-section d-flex flex-column justify-content-center">
              <p className="right-section-header">Welcome!</p>
              <p className="right-section-info">Enter details to login.
              </p>
              <form className="col-12" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Email" className="col-12" value={email} onChange={handleEmailChange} />
                  {emailError && <p className=" error-msg mt-2">{emailError}</p>}
                  <input type="text" placeholder="Password" className="col-12 mt-4" value={password} onChange={handlePasswordChange} />
                  {passwordError && <p className="mt-2 error-msg">{passwordError}</p>}
                  <div className="mt-4">
                  <Link to="/forgot-password" className="col-12 forgot-password-text">FORGOT PASSWORD?</Link>
                  </div>
                  <button className="col-12 login-btn" disabled={!isFormValid}>LOG IN</button>
              </form>
          </div>
    </div>
  )
}

export default Login;