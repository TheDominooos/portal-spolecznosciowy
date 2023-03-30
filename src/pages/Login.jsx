import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function getToken(e) {
    e.preventDefault();
    const loginInfo = new URLSearchParams();
    loginInfo.append("username", username);
    loginInfo.append("password", password);

    axios
      .post("http://192.168.5.27:8000/token/", loginInfo)
      .then((response) => {
        console.log(response.data.access_token);
      });
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
      </form>
    </div>
  );
}

export default Login;
