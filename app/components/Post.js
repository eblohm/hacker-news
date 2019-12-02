import React, { Component } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import { fetchComments, fetchItem } from "../utils/api";
import Loading from "./Loading";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Comment from "./Comment";

export default class Post extends Component {
  state = {
    post: null,
    comments: null,
    error: null,
    loadingPost: true,
    loadingComments: true
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    fetchItem(id)
      .then(post => {
        this.setState({
          post,
          loadingPost: false
        });

        return fetchComments(post.kids || []);
      })
      .then(comments => {
        this.setState({
          comments,
          loadingComments: false
        });
      })
      .catch(({ message }) => {
        console.warn(`Error fetching user: ${error}`);

        this.setState({
          error: message,
          loading: false
        });
      });
  }

  render() {
    const { post, comments, error, loadingComments, loadingPost } = this.state;

    if (error) {
      return <div>Error!</div>;
    }

    return (
      <>
        {loadingPost ? (
          <Loading text="Fetching Post" />
        ) : (
          <div className="comment--details">
            <PostTitle title={post.title} url={post.url} />
            <PostMeta
              by={post.by}
              comments={post.descendants}
              date={post.time}
            />
            <p dangerouslySetInnerHTML={{ __html: post.text }} />
          </div>
        )}
        {loadingComments ? (
          <Loading text="Fetching Comments" />
        ) : (
          <div className="comments">
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </>
    );
  }
}
