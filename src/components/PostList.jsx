import React from "react";
import Post from "./Post";
import "../css/postList.css";

function PostList({ tweets, onDelete }) {
  return (
    <div className="post-list">
      {tweets.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;
