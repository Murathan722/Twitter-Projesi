import React, { useState } from "react";
import "../css/tweetForm.css";
import Profilim from "../assets/dümen.jpeg";

function TweetForm({ onTweet }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newTweet = {
        id: Date.now(),
        person: "Murathan",
        kullanici: "Abanoz",
        personPhoto: Profilim,
        content: content.trim(),
      };
      onTweet(newTweet);
      setContent("");
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetForm;
