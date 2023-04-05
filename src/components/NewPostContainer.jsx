import { useState } from "react";
import axios from "axios";

function NewPostContainer() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [title, updateTitle] = useState("");
  const [text, updateText] = useState("");
  function addPost(e) {
    const post = {
      title: title,
      text: text,
      image_url: "",
      category_id: "1a2996e6-98d5-49c4-8619-397f95645325",
      disabled: false,
    };
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_DATABASE_IP + "/posts", post)
      .then((response) => console.log(response));
  }

  return (
    <div className="new-post-container">
      <form onSubmit={addPost}>
        <input
          name="title"
          placeholder="tytuł"
          type="text"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
          maxLength={20}
        ></input>
        <textarea
          name="text"
          placeholder="co u ciebie?"
          value={text}
          onChange={(e) => updateText(e.target.value)}
          maxLength={300}
        ></textarea>
        <input type="submit" value="Dodaj post"></input>
      </form>
    </div>
  );
}

export default NewPostContainer;
