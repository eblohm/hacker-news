import React, { Component } from "react";
import queryString from "query-string";
import { fetchUser, fetchPosts } from "../utils/api";
import { ConvertDate } from "../utils/helpers";
import PostsList from "./PostsList";
import Loading from "./Loading";

export default class User extends Component {
  state = {
    user: null,
    error: null,
    loading: true,
    userPosts: null,
    loadingPosts: true
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    fetchUser(id)
      .then(user => {
        this.setState({
          user,
          loading: false
        });

        return fetchPosts(user.submitted.slice(0, 30));
      })
      .then(posts =>
        this.setState({
          userPosts: posts,
          loadingPosts: false,
          error: null
        })
      )
      .catch(({ message }) => {
        console.warn(`Error fetching user: ${error}`);

        this.setState({
          error: message,
          loading: false
        });
      });
  }

  render() {
    const { user, error, loading, userPosts, loadingPosts } = this.state;

    if (loading || loadingPosts) {
      return <Loading />;
    }

    if (error) {
      return <div>Error!</div>;
    }

    return (
      <>
        <div className="user--info">
          <h1>{user.id}</h1>
          <p>
            joined <strong>{ConvertDate(user.created)}</strong> has{" "}
            <strong>{user.karma}</strong> karma
          </p>
          <p dangerouslySetInnerHTML={{ __html: user.about }} />
        </div>
        <div className="user--posts">
          <h1>Posts</h1>
          {userPosts.length > 0 ? (
            <PostsList posts={userPosts} />
          ) : (
            <p>This user has not posted yet</p>
          )}
        </div>
      </>
    );
  }
}
