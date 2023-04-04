import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Sidebar() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [name, getName] = useState("");
  const [surname, getSurname] = useState("");
  const [description, getDescription] = useState("");
  const [avatarURL, getAvatarURL] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DATABASE_IP + "/me")
      .then((response) => {
        getName(response.data.name);
        getSurname(response.data.surname);
        getDescription(response.data.description);
        getAvatarURL(response.data.avatar_url);
      })
      .catch((error) => {
        localStorage.removeItem("token");
      });
  });

  return (
    <div className="Sidebar">
      <p>
        <img alt="avatar" src={avatarURL} />
        {name}
        {surname}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default Sidebar;
