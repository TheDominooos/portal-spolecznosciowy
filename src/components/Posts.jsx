import axios from "axios";
import { useEffect, useState } from "react";
import usePostStore from "../hooks/usePosts";

function Posts() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;

  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);

  const [pageCount, setPageCount] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function loadPosts() {
    axios
      .get(process.env.REACT_APP_DATABASE_IP + "/posts", {
        params: { page: pageNumber },
      })
      .then((response) => {
        let postsArray = response.data.items.reverse();
        postsArray = postsArray.filter((item) => item.disabled === false);
        setPosts(postsArray);
        setPageCount(response.data.pages);
      });
  }
  useEffect(loadPosts, [pageNumber, setPosts]);

  function deletePost(postID) {
    axios
      .delete(process.env.REACT_APP_DATABASE_IP + "/posts?post_id=" + postID)
      .then((response) => {
        loadPosts();
      });
  }
  return (
    <>
      {Array.from(Array(pageCount).keys()).map((i) => {
        const pageInnerNumber = i + 1;
        return (
          <button
            key={pageInnerNumber}
            onClick={() => setPageNumber(pageInnerNumber)}
          >
            {pageInnerNumber}
          </button>
        );
      })}
      {posts.map((post) => (
        <div className="Post mx-auto" key={post.id}>
          <div className="post-title">{post.title}</div>
          <img alt="" src={post.author.avatar_url} />
          <div className="post-author">
            {post.author.name} {post.author.surname}
          </div>
          <div className="post-content">{post.text}</div>
          {post.author.id === localStorage.getItem("userID") ? (
            <button
              className="del-btn"
              onClick={() => {
                deletePost(post.id);
              }}
            >
              usuń posta
            </button>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default Posts;
