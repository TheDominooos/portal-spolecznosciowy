import axios from "axios";
import { useState, useEffect } from "react";
function Posts() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [posts, getPosts] = useState([]);
  const params = {
    category: "1a2996e6-98d5-49c4-8619-397f95645325",
    page: 1,
    size: 50,
  };
  function loadPosts() {
    axios
      .get(process.env.REACT_APP_DATABASE_IP + "/posts", params)
      .then((response) => {
        let postsArray = response.data.items.reverse();
        postsArray = postsArray.filter((item) => item.disabled === false);
        getPosts(postsArray);
      });
  }
  function deletePost(postID) {
    axios
      .delete(process.env.REACT_APP_DATABASE_IP + "/posts?post_id=" + postID)
      .then((response) => {
        console.log(response);
        loadPosts();
      });
  }
  //eslint-disable-next-line
  useEffect(loadPosts, []);

  return (
    <>
      {posts.map((post) => (
        <div className="Post mx-auto" key={post.id}>
          <div className="post-title">{post.title}</div>
          <div className="post-author">
            {post.author.name} {post.author.surname}
          </div>
          <div className="post-content">{post.text}</div>
          {post.author.id === localStorage.getItem("userID") ? (
            <button
              onClick={() => {
                deletePost(post.id);
              }}
            >
              usuń posta
            </button>
          ) : null}
          {post.disabled === true ? <p>POST DISABLED</p> : null}
        </div>
      ))}
    </>
  );
}

export default Posts;
