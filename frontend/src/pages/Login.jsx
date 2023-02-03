import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import "./style/Login.css";
// import instance from "../helpers/axios";

function Login({ handleAdmin, handleLogout }) {
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
      .then(() => {
        handleAdmin(true);
        handleLogout(true);
        navigate("/addProject");
      })
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
            value="sebastien.artesi@gmail.com"
            onChange={handleChangeLogin}
            required
          />
          <input
            className="password"
            type="password"
            name="password"
            placeholder="Password"
            value="azerty2023"
            onChange={handleChangeLogin}
            required
          />
          <button className="SubmitLogin" type="submit">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
