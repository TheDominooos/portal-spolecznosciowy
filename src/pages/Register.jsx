import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, updateUsername] = useState("");
  const [name, updateName] = useState("");
  const [surname, updateSurname] = useState("");
  const [password, updatePassword] = useState("");
  const [returnMessage, updateMessage] = useState("");
  const accountDetails = {
    username: username,
    name: name,
    surname: surname,
    password: password,
    avatar_url: "",
    description: "",
  };

  function sendCreationRequest(e) {
    e.preventDefault();
    try {
      axios
        .post(process.env.REACT_APP_DATABASE_IP + "/users/", accountDetails)
        .then((response) => {
          console.log(response);
          updateMessage("Rejestracja zakończona sukcesem!");
        });
    } catch (error) {
      updateMessage("Coś poszło nie tak :(");
    }
  }
  return (
    <div className="Register d-flex justify-content-center align-items-center mx-auto">
      <form onSubmit={sendCreationRequest}>
        <label>Nazwa użytkownika</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => updateUsername(e.target.value)}
          maxLength={20}
        ></input>
        <label>Imię</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => updateName(e.target.value)}
          maxLength={20}
        ></input>
        <label>Nazwisko</label>
        <input
          name="surname"
          type="text"
          value={surname}
          onChange={(e) => updateSurname(e.target.value)}
          maxLength={20}
        ></input>
        <label>Hasło</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
          maxLength={20}
        ></input>
        <input type="submit" value="Zarejestruj się"></input>
        <p>{returnMessage}</p>
      </form>
    </div>
  );
}

export default Register;
