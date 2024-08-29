import React, { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";

const BlogPost = ({ filePath, hashTags, author }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filePath]);
  return (
    <div>
      <h2>{filePath.replace("/posts/", "").replace(".md", "")}</h2>
      <p>Author: {author}</p>
      <ReactMarkDown>{content}</ReactMarkDown>
      <p>Tags: {hashTags.join(", ")}</p>
    </div>
  );
};
export default BlogPost;
