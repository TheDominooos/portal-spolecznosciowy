import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, updateUsername] = useState("");
  const [name, updateName] = useState("");
  const [surname, updateSurname] = useState("");
  const [password, updatePassword] = useState("");
  const [returnMessage, updateMessage] = useState("");
  const [avatarURL, updateAvatarURL] = useState("");
  const [description, updateDescription] = useState("");

  const accountDetails = {
    username: username,
    name: name,
    surname: surname,
    avatar_url: avatarURL,
    description: description,
    password: password,
    is_admin: true,
  };

  function sendCreationRequest(e) {
    e.preventDefault();

    console.log(accountDetails);
    axios
      .post(process.env.REACT_APP_DATABASE_IP + "/users/", accountDetails)
      .then((response) => {
        console.log(response);
        updateMessage("Rejestracja zakończona sukcesem!");
      })
      .catch((error) => updateMessage("Coś poszło nie tak "));
  }
  return (
    <div className="Register d-flex justify-content-center align-items-center mx-auto">
      <form onSubmit={sendCreationRequest}>
        <div className="row">
          <div className="col mx-auto">
            <img src={avatarURL} alt="" />
            <input
              name="avatarURL"
              placeholder="link do avataru"
              type="text"
              value={avatarURL}
              onChange={(e) => updateAvatarURL(e.target.value)}
            ></input>
            <textarea
              name="description"
              placeholder="Kilka słów o tobie"
              value={description}
              onChange={(e) => updateDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col mx-auto">
            <input
              name="username"
              placeholder="Nazwa użytkownika"
              type="text"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              maxLength={20}
            ></input>
            <input
              name="name"
              placeholder="Imię"
              type="text"
              value={name}
              onChange={(e) => updateName(e.target.value)}
              maxLength={20}
            ></input>
            <input
              name="surname"
              placeholder="Nazwisko"
              type="text"
              value={surname}
              onChange={(e) => updateSurname(e.target.value)}
              maxLength={20}
            ></input>
            <input
              name="password"
              placeholder="Hasło"
              type="password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              maxLength={20}
            ></input>
            <input type="submit" value="Zarejestruj się"></input>
          </div>
        </div>

        <p>{returnMessage}</p>
      </form>
    </div>
  );
}

export default Register;
