import React, { Component } from "react";
import PropTypes from "prop-types";
import PostsList from "./PostsList";
import { fetchMainPosts } from "../utils/api";

export default class Posts extends Component {
  state = {
    posts: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = () => {
    this.setState({
      posts: null,
      error: null,
      loading: true
    });

    fetchMainPosts(`top`)
      .then(posts =>
        this.setState({
          posts,
          error: null,
          loading: false
        })
      )
      .catch(({ message }) => {
        console.warn(`Error fetching posts: ${error}`);

        this.setState({
          error: message,
          loading: false
        });
      });
  };

  render() {
    const { posts, error, loading } = this.state;

    // Need to check that loading is false to trigger a re-render when the posts have been fetched
    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    return <PostsList posts={posts} />;
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(["top", "new"])
};
