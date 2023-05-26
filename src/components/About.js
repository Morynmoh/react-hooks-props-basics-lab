import React from "react";
import Links from "./Links";

function About(props) {

  if (!props.isPublished) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  } else {
    // show published content
    return (
      <div id="about">
          <h2>About Me</h2>
          <p>Put the bio in here</p>
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
          {/* add your <Links /> component here */}
          <Links links1="https://github.com/liza" links2="https://www.linkedin.com/in/liza/" />
      </div>
    );
  }
}

export default About;
