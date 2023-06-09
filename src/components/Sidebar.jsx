import axios from "axios";
import { useState, useEffect } from "react";
import NewPostContainer from "./NewPostContainer";
import useTokenStore from "../hooks/useToken";

function Sidebar() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [name, getName] = useState("");
  const [surname, getSurname] = useState("");
  const [description, getDescription] = useState("");
  const [avatarURL, getAvatarURL] = useState("");

  const setToken = useTokenStore((state) => state.setToken);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DATABASE_IP + "/me")
      .then((response) => {
        getName(response.data.name);
        getSurname(response.data.surname);
        getDescription(response.data.description);
        getAvatarURL(response.data.avatar_url);
        localStorage.setItem("userID", response.data.id);
      })
      .catch((error) => {
        error = error.toJSON();
        console.error(error.message);
        if (error.status === 401) {
          localStorage.removeItem("token");
          setToken(null);
        }
        //
      });
  });

  return (
    <div className="sidebar-container">
      <div className="account">
        <img alt="" src={avatarURL} />
        <p>
          {name} {surname}
        </p>
        <p>{description}</p>
      </div>
      <NewPostContainer />
    </div>
  );
}

export default Sidebar;
