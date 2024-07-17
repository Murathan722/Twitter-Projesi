import React from "react";
import news from "../Haberler.js";
import "../css/newList.css";

export default function NewsList() {
  return (
    <div className="news-list">
      <div className="input-area">
        <input type="text" placeholder="Ara" />
      </div>
      <div className="haberler">
        <h3>İlgini çekebilecek gündemler</h3>
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <p className="item-description">{item.description}</p>
              <p className="item-post">{item.posts} posts</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
