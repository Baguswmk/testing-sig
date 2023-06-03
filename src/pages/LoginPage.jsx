import "../style/Login.css";
import { Person } from "react-bootstrap-icons";
import { Lock } from "react-bootstrap-icons";

function LoginPage() {
  return (
    <div className="login-box">
      <h2>Selamat Datang</h2>
      <h4>Harap masuk untuk melihat data</h4>
      <form>
        <div className="user-box">
          <Person />
          <input type="text" name="Username" required="" placeholder="Username" />
        </div>
        <div className="user-box">
          <Lock />
          <input type="password" name="password" required="" placeholder="Password" />
          <span>Lupa sandi?</span>
        </div>

        <button id="loginBtn">
          <a href="/dashboard"></a> Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
