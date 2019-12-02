import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme";
import { ConvertDate } from "../utils/helpers";

export default function Comment({ comment }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="comment">
          <div className={`comment--meta__${theme}`}>
            by <Link to={`/user?id=${comment.by}`}>{comment.by}</Link> on{" "}
            {ConvertDate(comment.time)}
          </div>
          <p
            className="comment--text"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
        </div>
      )}
    </ThemeConsumer>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
