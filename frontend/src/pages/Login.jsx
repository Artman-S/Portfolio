import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
// import instance from "../helpers/axios";
import axios from "axios";

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // instance
    //   .post("/login", loginUser)
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, loginUser)
      .then(() => navigate("/addProject"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="login">
        <form className="loginForm" onSubmit={handleLogin}>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChangeLogin}
            required
          />
          <input
            className="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeLogin}
            required
          />
          <button className="SubmitLogin" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
