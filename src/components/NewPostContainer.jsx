import { useState } from "react";
import axios from "axios";
import usePostStore from "../hooks/usePosts";

function NewPostContainer() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [title, updateTitle] = useState("");
  const [text, updateText] = useState("");
  const setPosts = usePostStore((state) => state.setPosts);
  function loadPosts() {
    axios.get(process.env.REACT_APP_DATABASE_IP + "/posts").then((response) => {
      let postsArray = response.data.items.reverse();
      postsArray = postsArray.filter((item) => item.disabled === false);
      setPosts(postsArray);
    });
  }
  function addPost(e) {
    const post = {
      title: title,
      text: text,
      image_url: "",
      category_id: "efd40b43-9f0b-4975-a58c-e5f52c7ab327",
      disabled: false,
    };
    e.preventDefault();
    axios.post(process.env.REACT_APP_DATABASE_IP + "/posts", post).then(() => {
      loadPosts();
    });
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
