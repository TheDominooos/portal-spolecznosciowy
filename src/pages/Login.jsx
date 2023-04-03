import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [returnMessage, updateMessage] = useState("");
  const navigate = useNavigate();
  function getToken(e) {
    e.preventDefault();
    const loginInfo = new URLSearchParams();
    loginInfo.append("username", username);
    loginInfo.append("password", password);
    try {
      axios
        .post(process.env.REACT_APP_DATABASE_IP + "/token/", loginInfo)
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          console.log(localStorage.getItem("token"));
          updateMessage(
            "Pomyślnie zalogowano! Za chwilę nastąpi przekierowanie na stronę główną!"
          );
          setTimeout(() => navigate("/"), 5000);
        });
    } catch (error) {
      updateMessage("Błędne dane logowania!");
    }
  }
  return (
    <div className="Login d-flex justify-content-center align-items-center mx-auto">
      <form onSubmit={getToken}>
        <label>Nazwa użytkownika</label>
        <input
          name="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Hasło</label>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Zaloguj się"></input>
        <p>
          <b>{returnMessage}</b>
        </p>
      </form>
    </div>
  );
}

export default Login;
