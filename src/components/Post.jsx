import React from "react";
import "../css/post.css";

const Post = ({ tweet, onDelete }) => {
  const handleDelete = () => {
    onDelete(tweet.id); 
  };
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img src={tweet.personPhoto} alt="" className="profile-photo" />
        <div>
          <span className="person">{tweet.person}</span>
          <span className="username">@{tweet.kullanici}</span>
        </div>
        <button onClick={handleDelete} className="delete-button">
          Sil
        </button>
      </div>
      <div className="tweet-content">
        <p>{tweet.content}</p>
        {tweet.photo && (
          <img src={tweet.photo} alt="Tweet content" className="tweet-photo" />
        )}
      </div>
    </div>
  );
};

export default Post;
