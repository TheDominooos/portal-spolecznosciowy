import React from "react";

function Posts() {
  const postsList = [
    {
      id: 1,
      title: "Post",
      content: "Pierwszy post",
    },
    {
      id: 2,
      title: "Post",
      content: "Drugi post",
    },
    {
      id: 3,
      title: "Post",
      content: "Trzeci post",
    },
  ];
  return (
    <>
      {postsList.map((post) => (
        <div className="Post mx-auto" key={post.id}>
          <div className="PostTitle">{post.title}</div>
          <div className="PostContent">{post.content}</div>
        </div>
      ))}
    </>
  );
}

export default Posts;
