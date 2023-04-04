import axios from "axios";
import { useState, useEffect } from "react";
function Posts() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [posts, getPosts] = useState([]);
  const params = {
    category: "3c696bef-97aa-40f9-8010-ae4928696808",
    page: 1,
    size: 50,
  };
  function loadPosts() {
    axios
      .get(process.env.REACT_APP_DATABASE_IP + "/posts", params)
      .then((response) => {
        console.log(response.data.items);
        getPosts(response.data.items);
      });
  }

  useEffect(loadPosts, []);

  // const postsList = [
  //   {
  //     id: 1,
  //     title: "Post",
  //     content: "Pierwszy post",
  //   },
  //   {
  //     id: 2,
  //     title: "Post",
  //     content: "Drugi post",
  //   },
  //   {
  //     id: 3,
  //     title: "Post",
  //     content: "Trzeci post",
  //   },
  // ];
  return (
    <>
      {posts.map((post) => (
        <div className="Post mx-auto" key={post.id}>
          <div className="PostTitle">{post.title}</div>
          <div>
            {post.author.name}
            {post.author.surname}
          </div>
          <div className="PostContent">{post.text}</div>
        </div>
      ))}
    </>
  );
}

export default Posts;
