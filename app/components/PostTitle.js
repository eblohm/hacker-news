import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../contexts/theme";

export default function PostTitle(props) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <a href={props.url} className={`post--link ${theme}-link`}>
          {props.title}
        </a>
      )}
    </ThemeConsumer>
  );
}

PostTitle.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired
};
