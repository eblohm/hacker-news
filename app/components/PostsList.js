import React from "react";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.url} className="post">
          <PostTitle url={post.url} title={post.title} id={post.id} />
          <PostMeta
            by={post.by}
            date={post.time}
            comments={post.descendants}
            id={post.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
