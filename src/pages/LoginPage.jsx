import { useState } from "react";
// import axios from "../global/axios";
import "../style/pages/Login.css";
import { Person, Lock } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", { username, password });
      console.log(response.data);
      navigate.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/register", { username, password });
      console.log(response.data);
      navigate.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-box">
      <h2>Selamat Datang</h2>
      <h4>Harap masuk untuk melihat data</h4>
      <form>
        <div className="user-box">
          <Person />
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" />
        </div>
        <div className="user-box">
          <Lock />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          <span>Lupa sandi?</span>
        </div>

        <button id="loginBtn" onClick={handleLogin}>
          Login
        </button>
        <button id="registerBtn" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
