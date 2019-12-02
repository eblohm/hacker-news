import React from "react";
import PropTypes from "prop-types";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} className="post">
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

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
