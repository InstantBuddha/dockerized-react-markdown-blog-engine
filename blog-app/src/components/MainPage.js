import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const MainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch("/posts/posts.json")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
  
    return (
      <div>
        <h1>My Blog</h1>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            filePath={`/posts/${post.postFileName}`}
            hashTags={post.postHashTags}
            author={post.author}
          />
        ))}
      </div>
  );
};
export default MainPage;
