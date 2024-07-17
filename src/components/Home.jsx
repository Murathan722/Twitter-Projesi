import React, { useState } from "react";
import Navigation from "./Navigation";
import PostList from "./PostList";
import NewsList from "./NewsList";
import TweetForm from "./TweetForm";
import tweetsData from "../SahteVeri";
import "../css/home.css";
import PostHeader from "./PostHeader";

function Home() {
  const [tweets, setTweets] = useState(tweetsData);

  const handleNewTweet = (newTweet) => {
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const handleDelete = (tweetId) => {
    setTweets((prevTweets) =>
      prevTweets.filter((tweet) => tweet.id !== tweetId)
    );
  };

  return (
    <div className="home">
      <div className="nav">
        <Navigation />
      </div>
      <div className="posts">
        <PostHeader />
        <TweetForm onTweet={handleNewTweet} />
        <PostList tweets={tweets} onDelete={handleDelete} />
      </div>
      <div className="news">
        <NewsList />
      </div>
    </div>
  );
}

export default Home;
