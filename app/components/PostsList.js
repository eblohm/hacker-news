import React from "react";
import { ConvertDate } from "../utils/helpers";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.url} className="post">
          <a href={post.url} className="post--link">
            {post.title}
          </a>
          <p>
            by{" "}
            <a href="#" className="post--author">
              {post.by}
            </a>{" "}
            on {ConvertDate(post.time)} with <a href="#">{post.descendants}</a>{" "}
            comments
          </p>
          {console.log(post)}
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
