import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ConvertDate } from "../utils/helpers";
import { ThemeConsumer } from "../contexts/theme";

export default function PostMeta(props) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <p className="post--meta">
          by{" "}
          <Link
            to={`/user?id=${props.by}`}
            className={`post--meta--link__${theme}`}
          >
            {props.by}
          </Link>{" "}
          on {ConvertDate(props.date)} with{" "}
          <Link
            to={`/post?id=${props.id}`}
            className={`post--meta--link__${theme}`}
          >
            {props.comments}
          </Link>{" "}
          comments
        </p>
      )}
    </ThemeConsumer>
  );
}

PostMeta.propTypes = {
  by: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired
};
