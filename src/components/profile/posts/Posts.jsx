import React from "react";

const Posts = (posts) => {
  return (
    <div>
      {[...posts.posts].reverse().map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
